const STORAGE_KEY = "palco-digital-demo-v1";

const seedState = {
  notice: "",
  activities: [
    {
      id: "a1", title: "Corpos em Movimento", category: "Exposição", date: "2026-09-19", time: "10:00",
      location: "Galeria Principal", capacity: 80, status: "aberta", color: "#d79d3d",
      description: "Exposição coletiva sobre corpo, cidade e memória, com obras de artistas locais.",
      rules: "Entrada gratuita. Visitação livre durante o horário de funcionamento. Espaço acessível por rampa."
    },
    {
      id: "a2", title: "Fotografia com Celular", category: "Oficina", date: "2026-09-19", time: "14:00",
      location: "Sala Criativa 2", capacity: 12, status: "aberta", color: "#bd684a",
      description: "Oficina prática de enquadramento, luz e narrativa visual usando recursos do celular.",
      rules: "A partir de 14 anos. Levar celular carregado. Chegar 15 minutos antes. Duração de 2 horas."
    },
    {
      id: "a3", title: "Sons do Bairro", category: "Evento", date: "2026-09-20", time: "18:30",
      location: "Teatro Aberto", capacity: 45, status: "aberta", color: "#71364f",
      description: "Apresentação musical com grupos da comunidade e repertório autoral.",
      rules: "Classificação livre. Lugares por ordem de check-in. Entrada permitida até 18h45."
    },
    {
      id: "a4", title: "Histórias do Edifício", category: "Visita guiada", date: "2026-09-21", time: "11:00",
      location: "Recepção", capacity: 20, status: "aberta", color: "#558477",
      description: "Percurso guiado pela arquitetura, pelo acervo e pelas histórias do centro cultural.",
      rules: "Duração de 50 minutos. Crianças devem estar acompanhadas. Percurso acessível por elevador."
    }
  ],
  attendees: [
    { id: "p1", activityId: "a2", name: "Marina (exemplo)", email: "m***@exemplo.com", code: "PD-DEMO01", status: "confirmada", createdAt: "2026-09-17T09:00:00" },
    { id: "p2", activityId: "a3", name: "João (exemplo)", email: "j***@exemplo.com", code: "PD-DEMO02", status: "presente", createdAt: "2026-09-17T09:10:00" }
  ],
  currentTicketId: null
};

let state = loadState();

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const formatDate = value => new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short" }).format(new Date(`${value}T12:00:00`));
const maskEmail = email => {
  const [name, domain] = email.split("@");
  return `${name.slice(0, 1)}***@${domain}`;
};

function cloneSeed() { return JSON.parse(JSON.stringify(seedState)); }
function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || cloneSeed(); }
  catch { return cloneSeed(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function activityById(id) { return state.activities.find(item => item.id === id); }
function activeAttendees(activityId) { return state.attendees.filter(item => item.activityId === activityId && item.status !== "cancelada"); }
function vacancies(activity) { return Math.max(0, activity.capacity - activeAttendees(activity.id).length); }
function statusLabel(status) { return ({ aberta: "Inscrições abertas", cancelada: "Cancelada", confirmada: "Confirmada", presente: "Presente", cancelada_inscricao: "Cancelada" })[status] || status; }
function escapeHtml(text = "") {
  return String(text).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function showView(name, updateHash = true) {
  $$(".view").forEach(view => { view.hidden = true; view.classList.remove("active"); });
  const target = $(`#view-${name}`) || $("#view-programacao");
  target.hidden = false;
  target.classList.add("active");
  $$(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === name));
  if (updateHash) history.replaceState(null, "", `#${name}`);
  if (name === "ingresso") renderTicket();
  if (name === "equipe") renderAdmin();
  target.querySelector("h1, h2")?.focus?.({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function populateDateFilter() {
  const select = $("#date-filter");
  const previous = select.value;
  select.innerHTML = '<option value="todas">Todas as datas</option>' +
    [...new Set(state.activities.map(item => item.date))].sort().map(date => `<option value="${date}">${formatDate(date)}</option>`).join("");
  select.value = [...select.options].some(option => option.value === previous) ? previous : "todas";
}

function renderPublicNotice() {
  let notice = $("#public-notice");
  if (!state.notice) { notice?.remove(); return; }
  if (!notice) {
    notice = document.createElement("div");
    notice.id = "public-notice";
    notice.className = "demo-notice";
    notice.setAttribute("role", "status");
    $("#agenda").before(notice);
  }
  notice.innerHTML = `<strong>Aviso do centro cultural:</strong> ${escapeHtml(state.notice)}`;
}

function renderActivities() {
  const query = $("#search").value.trim().toLocaleLowerCase("pt-BR");
  const category = $("#category").value;
  const date = $("#date-filter").value;
  const filtered = state.activities.filter(activity => {
    const matchesText = `${activity.title} ${activity.location}`.toLocaleLowerCase("pt-BR").includes(query);
    return matchesText && (category === "todas" || activity.category === category) && (date === "todas" || activity.date === date);
  });
  $("#result-count").textContent = `${filtered.length} ${filtered.length === 1 ? "atividade" : "atividades"}`;
  $("#empty-state").hidden = filtered.length > 0;
  $("#activity-grid").innerHTML = filtered.map(activity => {
    const available = vacancies(activity);
    const unavailable = activity.status === "cancelada" || available === 0;
    return `<article class="activity-card">
      <div class="card-art" style="--card-color:${activity.color}"><span class="category-tag">${escapeHtml(activity.category)}</span></div>
      <div class="card-body">
        <div class="card-meta"><span>${formatDate(activity.date)} · ${activity.time}</span><span>${escapeHtml(activity.location)}</span></div>
        <h3>${escapeHtml(activity.title)}</h3>
        <p>${escapeHtml(activity.description)}</p>
        <div class="card-footer">
          <span class="vacancy">${activity.status === "cancelada" ? "Atividade cancelada" : available === 0 ? "Lotada" : `${available} ${available === 1 ? "vaga" : "vagas"}`}</span>
          <button type="button" data-open-activity="${activity.id}">${unavailable ? "Ver detalhes" : "Participar"}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function openActivity(id) {
  const activity = activityById(id);
  if (!activity) return;
  const available = vacancies(activity);
  $("#activity-detail").innerHTML = `
    <span class="category-tag">${escapeHtml(activity.category)}</span>
    <h2 id="dialog-title">${escapeHtml(activity.title)}</h2>
    <p>${escapeHtml(activity.description)}</p>
    <div class="detail-meta">
      <div><strong>Data e horário</strong>${formatDate(activity.date)} às ${activity.time}</div>
      <div><strong>Local</strong>${escapeHtml(activity.location)}</div>
      <div><strong>Disponibilidade</strong>${activity.status === "cancelada" ? "Atividade cancelada" : `${available} de ${activity.capacity} vagas`}</div>
      <div><strong>Valor</strong>Gratuito</div>
    </div>
    <div class="rules-box"><strong>Regras de participação</strong><br>${escapeHtml(activity.rules)}</div>`;
  $("#registration-activity-id").value = id;
  const form = $("#registration-form");
  form.hidden = activity.status === "cancelada" || available === 0;
  form.reset();
  $("#activity-dialog").showModal();
}

function createCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code;
  do { code = "PD-" + Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""); }
  while (state.attendees.some(item => item.code === code));
  return code;
}

function registerVisitor(event) {
  event.preventDefault();
  const activity = activityById($("#registration-activity-id").value);
  if (!activity || activity.status !== "aberta" || vacancies(activity) < 1) {
    showToast("A vaga não está mais disponível.");
    $("#activity-dialog").close();
    renderAll();
    return;
  }
  const attendee = {
    id: `p${Date.now()}`, activityId: activity.id,
    name: $("#visitor-name").value.trim(), email: $("#visitor-email").value.trim(),
    code: createCode(), status: "confirmada", createdAt: new Date().toISOString()
  };
  state.attendees.push(attendee);
  state.currentTicketId = attendee.id;
  saveState();
  $("#activity-dialog").close();
  renderAll();
  showView("ingresso");
  showToast("Inscrição confirmada. Seu ingresso foi gerado.");
}

function qrMarkup(code) {
  let seed = [...code].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Array.from({ length: 81 }, (_, index) => {
    seed = (seed * 9301 + 49297 + index) % 233280;
    const finder = (index % 9 < 3 && Math.floor(index / 9) < 3) || (index % 9 > 5 && Math.floor(index / 9) < 3) || (index % 9 < 3 && Math.floor(index / 9) > 5);
    return `<i class="${finder || seed / 233280 > .5 ? "on" : ""}"></i>`;
  }).join("");
}

function renderTicket() {
  const attendee = state.attendees.find(item => item.id === state.currentTicketId);
  $("#ticket-count").hidden = !attendee;
  if (!attendee) {
    $("#ticket-area").innerHTML = `<div class="ticket-empty"><h2>Você ainda não possui um ingresso</h2><p>Escolha uma atividade disponível e faça uma inscrição demonstrativa.</p><button class="primary-button" data-go="programacao">Consultar programação</button></div>`;
    return;
  }
  const activity = activityById(attendee.activityId);
  const cancelled = attendee.status === "cancelada" || activity.status === "cancelada";
  $("#ticket-area").innerHTML = `<article class="ticket">
    <div class="ticket-main">
      <span class="status-tag ${cancelled ? "cancelled" : ""}">${cancelled ? "Ingresso inválido" : statusLabel(attendee.status)}</span>
      <h2>${escapeHtml(activity.title)}</h2>
      <p>Ingresso individual para <strong>${escapeHtml(attendee.name)}</strong>.</p>
      <div class="ticket-details">
        <div><span>Data</span>${formatDate(activity.date)}</div><div><span>Horário</span>${activity.time}</div>
        <div><span>Local</span>${escapeHtml(activity.location)}</div><div><span>Categoria</span>${escapeHtml(activity.category)}</div>
      </div>
      <div class="ticket-actions">
        <button class="primary-button" data-go="programacao">Ver programação</button>
        ${attendee.status === "confirmada" && activity.status !== "cancelada" ? '<button id="cancel-ticket" class="danger-button">Cancelar inscrição</button>' : ""}
      </div>
    </div>
    <div class="ticket-side">
      <div class="qr-demo" aria-label="QR code ilustrativo">${qrMarkup(attendee.code)}</div>
      <div><small>Código do ingresso</small><div class="ticket-code">${attendee.code}</div></div>
      <small>QR ilustrativo. A validação usa o código acima.</small>
    </div>
  </article>`;
}

function cancelTicket() {
  const attendee = state.attendees.find(item => item.id === state.currentTicketId);
  if (!attendee || attendee.status !== "confirmada") return;
  attendee.status = "cancelada";
  saveState();
  renderAll();
  showToast("Inscrição cancelada. A vaga voltou a ficar disponível.");
}

function renderAdmin() {
  const confirmed = state.attendees.filter(item => item.status === "confirmada").length;
  const present = state.attendees.filter(item => item.status === "presente").length;
  const openActivities = state.activities.filter(item => item.status === "aberta").length;
  const totalVacancies = state.activities.filter(item => item.status === "aberta").reduce((sum, item) => sum + vacancies(item), 0);
  $("#metrics").innerHTML = [
    [openActivities, "Atividades abertas"], [confirmed, "Inscrições confirmadas"], [present, "Entradas registradas"], [totalVacancies, "Vagas disponíveis"]
  ].map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join("");

  $("#admin-activities").innerHTML = state.activities.map(activity => `<tr>
    <td><strong>${escapeHtml(activity.title)}</strong><br><small>${escapeHtml(activity.location)}</small></td>
    <td>${formatDate(activity.date)}<br>${activity.time}</td>
    <td>${activeAttendees(activity.id).length} / ${activity.capacity}</td>
    <td><span class="status-tag ${activity.status === "cancelada" ? "cancelled" : ""}">${activity.status === "aberta" ? "Publicada" : "Cancelada"}</span></td>
    <td><button type="button" data-toggle-status="${activity.id}">${activity.status === "aberta" ? "Cancelar" : "Reabrir"}</button></td>
  </tr>`).join("");

  const filter = $("#attendee-filter");
  const previous = filter.value;
  filter.innerHTML = '<option value="todas">Todas</option>' + state.activities.map(item => `<option value="${item.id}">${escapeHtml(item.title)}</option>`).join("");
  filter.value = [...filter.options].some(option => option.value === previous) ? previous : "todas";
  renderAttendees();
  $("#current-notice").innerHTML = state.notice ? `<strong>Aviso publicado:</strong> ${escapeHtml(state.notice)}` : "Nenhum aviso publicado.";
}

function renderAttendees() {
  const selected = $("#attendee-filter").value;
  const attendees = state.attendees.filter(item => selected === "todas" || item.activityId === selected);
  $("#attendees-table").innerHTML = attendees.length ? attendees.map(item => {
    const activity = activityById(item.activityId);
    return `<tr><td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.email.includes("***") ? item.email : maskEmail(item.email))}</small></td><td>${escapeHtml(activity?.title || "Atividade removida")}</td><td><code>${item.code}</code></td><td><span class="status-tag ${item.status === "cancelada" ? "cancelled" : ""}">${statusLabel(item.status)}</span></td></tr>`;
  }).join("") : '<tr><td colspan="4">Nenhuma inscrição para este filtro.</td></tr>';
}

function performCheckin(event) {
  event.preventDefault();
  const code = $("#checkin-code").value.trim().toUpperCase();
  const attendee = state.attendees.find(item => item.code.toUpperCase() === code);
  const result = $("#checkin-result");
  result.classList.remove("error");
  if (!attendee) { result.textContent = "Código não encontrado."; result.classList.add("error"); return; }
  const activity = activityById(attendee.activityId);
  if (activity.status === "cancelada" || attendee.status === "cancelada") { result.textContent = "Ingresso inválido: atividade ou inscrição cancelada."; result.classList.add("error"); return; }
  if (attendee.status === "presente") { result.textContent = `Entrada já registrada para ${attendee.name}.`; result.classList.add("error"); return; }
  attendee.status = "presente";
  saveState();
  result.textContent = `Entrada confirmada: ${attendee.name} em ${activity.title}.`;
  $("#checkin-form").reset();
  renderAdmin();
}

function publishNotice(event) {
  event.preventDefault();
  state.notice = $("#notice-text").value.trim();
  saveState();
  renderAll();
  $("#notice-text").value = "";
  showToast(state.notice ? "Aviso publicado na programação." : "Aviso removido.");
}

function toggleActivityStatus(id) {
  const activity = activityById(id);
  if (!activity) return;
  activity.status = activity.status === "aberta" ? "cancelada" : "aberta";
  saveState();
  renderAll();
  showToast(activity.status === "cancelada" ? "Atividade cancelada e ingressos invalidados." : "Atividade reaberta.");
}

function addActivity(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.activities.push({
    id: `a${Date.now()}`, title: data.get("title").trim(), category: data.get("category"), date: data.get("date"),
    time: data.get("time"), location: data.get("location").trim(), capacity: Number(data.get("capacity")),
    status: "aberta", color: ["#d79d3d", "#bd684a", "#71364f", "#558477"][state.activities.length % 4],
    description: data.get("description").trim(), rules: data.get("rules").trim()
  });
  saveState();
  event.currentTarget.reset();
  event.currentTarget.hidden = true;
  $("#toggle-new-activity").setAttribute("aria-expanded", "false");
  renderAll();
  showToast("Atividade cadastrada e publicada.");
}

function resetDemo() {
  state = cloneSeed();
  saveState();
  renderAll();
  $("#checkin-result").textContent = "";
  showToast("Demonstração restaurada aos dados iniciais.");
}

function renderAll() {
  populateDateFilter();
  renderPublicNotice();
  renderActivities();
  renderTicket();
  renderAdmin();
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view], [data-go]");
  if (nav) showView(nav.dataset.view || nav.dataset.go);
  const activityButton = event.target.closest("[data-open-activity]");
  if (activityButton) openActivity(activityButton.dataset.openActivity);
  const statusButton = event.target.closest("[data-toggle-status]");
  if (statusButton) toggleActivityStatus(statusButton.dataset.toggleStatus);
  if (event.target.closest("#cancel-ticket")) cancelTicket();
});

$("#filters").addEventListener("input", renderActivities);
$("#filters").addEventListener("reset", () => setTimeout(renderActivities));
$("#registration-form").addEventListener("submit", registerVisitor);
$("#activity-dialog .dialog-close").addEventListener("click", () => $("#activity-dialog").close());
$("#activity-dialog").addEventListener("click", event => { if (event.target === $("#activity-dialog")) $("#activity-dialog").close(); });
$("#checkin-form").addEventListener("submit", performCheckin);
$("#notice-form").addEventListener("submit", publishNotice);
$("#attendee-filter").addEventListener("change", renderAttendees);
$("#new-activity-form").addEventListener("submit", addActivity);
$("#toggle-new-activity").addEventListener("click", () => {
  const form = $("#new-activity-form");
  form.hidden = !form.hidden;
  $("#toggle-new-activity").setAttribute("aria-expanded", String(!form.hidden));
  if (!form.hidden) form.querySelector("input")?.focus();
});
$("#cancel-new-activity").addEventListener("click", () => { $("#new-activity-form").hidden = true; $("#toggle-new-activity").setAttribute("aria-expanded", "false"); });
$("#reset-demo").addEventListener("click", resetDemo);

renderAll();
showView(["programacao", "ingresso", "equipe"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "programacao", false);
