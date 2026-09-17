# Roteiro da apresentação · 14 minutos

**12 slides, cinco participantes e um minuto de margem até o limite de 15 minutos.** A divisão de papéis é proposta e precisa ser confirmada. A duração é planejada, não resultado de um ensaio. O roteiro serve como apoio: cada integrante deve adaptar as falas e acrescentar sua motivação pessoal verdadeira.

## Distribuição do tempo

| Slide | Tema | Quem fala | Duração | Tempo acumulado |
|---|---|---|---|---|
| 1 | Empresa | Felipe | 0:40 | 0:40 |
| 2 | Problema | Yan | 0:50 | 1:30 |
| 3 | Funcionamento | Ycaro | 1:00 | 2:30 |
| 4 | Prioridades | Jairisson | 1:00 | 3:30 |
| 5 | Requisitos e Produto + postagem | Yan | 1:30 | 5:00 |
| 6 | UX/UI e Acessibilidade + postagem | Ycaro | 1:30 | 6:30 |
| 7 | Front-end + postagem | Felipe | 1:30 | 8:00 |
| 8 | Back-end e Dados + postagem | Jairisson | 1:30 | 9:30 |
| 9 | Segurança e Qualidade + postagem | Flavio | 1:30 | 11:00 |
| 10 | Riscos e cuidados | Flavio | 1:10 | 12:10 |
| 11 | Tour pelo GitHub | Felipe | 1:00 | 13:10 |
| 12 | Benefícios e fechamento | Yan | 0:50 | 14:00 |

Totais por pessoa: Felipe 3:10, Yan 3:10, Ycaro 2:30, Jairisson 2:30 e Flavio 2:40.

## Slide 1 · Felipe · 40 segundos

“Somos a equipe Palco Digital, formada por Yan, Felipe, Ycaro, Jairisson e Flavio. Nossa empresa fictícia atua com tecnologia para gestão cultural. A proposta é uma plataforma web que reúna a programação de um centro cultural e ajude a organizar inscrições e atendimento. Vamos mostrar o problema, o funcionamento proposto e como cada área profissional contribui para desenvolver essa solução.”

**Nota:** a ilustração é fictícia e gerada por IA. Créditos em [creditos.md](creditos.md). Base: [README](../README.md).

## Slide 2 · Yan · 50 segundos

“O centro cultural oferece exposições, oficinas, eventos e visitas guiadas. As informações aparecem em diferentes canais, e o visitante tem dificuldade para encontrar horários, disponibilidade e regras. A equipe também precisa organizar as inscrições. Nossa análise parte desse enunciado. Não entrevistamos uma instituição nem medimos perdas. Propomos uma programação oficial e um controle de participação que possam ser validados com quem vive essa rotina.”

**Apoio se houver tempo:** citar a dúvida “a oficina ainda tem vaga?” como exemplo de situação a resolver, sem apresentá-la como relato coletado. Base: [problema](../docs/01-problema.md).

## Slide 3 · Ycaro · 1 minuto

“Escolhemos uma plataforma web que abre no navegador. O visitante consulta uma atividade, verifica horário e regras e solicita uma vaga. A confirmação só acontece depois do registro no servidor. Ele recebe um ingresso com código legível e QR code. A coordenação mantém a programação e envia avisos de mudança. Na entrada, a recepção confere a validade e registra presença. Quem não consegue usar o canal digital pode ter atendimento assistido, com o mesmo controle de vagas. Oficineiros e guias recebem a agenda pela coordenação na primeira versão.”

**Demonstração verbal:** narrar o exemplo de uma oficina gratuita, da consulta à entrada. Base: [fluxos da solução](../docs/02-solucao.md).

## Slide 4 · Jairisson · 1 minuto

“O MVP é a primeira versão necessária para validar o serviço. Começaríamos pelo cadastro e pela consulta da programação. Depois entraríamos no fluxo de inscrição, cancelamento, ingresso e presença, junto com os avisos. Permissões, acessibilidade e proteção de dados acompanham essas entregas. Lista de espera e relatórios mais completos ficam para depois. Consideramos inicialmente um centro e atividades gratuitas. Um critério central é que duas solicitações para a última vaga produzam só uma confirmação.”

**Nota:** as etapas são ordem de desenvolvimento dentro do MVP, não promessa de prazos. Base: [prioridades e critérios](../docs/02-solucao.md).

## Slides 5 a 9 · Estrutura de 1 minuto e 30 por integrante

Usar cerca de 20 segundos para explicar o papel e a motivação, 30 para uma entrega e um exemplo, 20 para a colaboração e 20 para ler o trecho da postagem e comentá-lo. A atividade permite comentar a postagem, então não é necessário ler o texto inteiro.

### Slide 5 · Yan

“Requisitos e Produto conectam a dificuldade do centro às decisões de desenvolvimento. A escolha dessa área faz sentido para o projeto porque as regras precisam ser compartilhadas. Uma entrega seria a lista de funcionalidades em ordem de prioridade, acompanhada de critérios de aceitação. No exemplo da última vaga, a regra define o que UX explica, Front-end mostra, Back-end executa e Qualidade verifica. Na minha proposta de postagem, destaquei: ‘A confirmação só aparece depois que o sistema registra a vaga disponível.’ Esse trecho resume uma decisão que depende de todas as áreas.”

**Personalizar:** acrescentar por que Yan se interessa pela área. **Pergunta para estudo:** o que muda se a coordenação permitir cancelar a inscrição até uma hora antes da atividade? Fonte conceitual: [Scrum Guide, Product Owner](https://scrumguides.org/scrum-guide.html#product-owner). Aplicações: [papel](../docs/03-papeis/yan.md) e [postagem](../docs/04-linkedin/yan.md).

### Slide 6 · Ycaro

“UX/UI organiza a experiência e a interface, considerando acessibilidade desde o começo. Essa área é necessária porque reunir informações não garante que as pessoas consigam encontrá-las. Eu proporia o fluxo do visitante e um protótipo em que horário e regras aparecem antes da inscrição. Trabalharia com Requisitos e Back-end para entender estados e dados, com Front-end para implementar e com Qualidade para avaliar barreiras. O trecho da postagem diz: ‘A navegação precisa funcionar para quem utiliza teclado.’ Isso precisa ser conferido no uso, junto com rótulos, foco e mensagens de erro.”

**Personalizar:** acrescentar a motivação de Ycaro. **Pergunta para estudo:** uma avaliação automática de acessibilidade é suficiente? Referências: [W3C, acessibilidade](https://www.w3.org/WAI/fundamentals/accessibility-intro/) e [formulários](https://www.w3.org/WAI/tutorials/forms/). Aplicações: [papel](../docs/03-papeis/ycaro.md) e [postagem](../docs/04-linkedin/ycaro.md).

### Slide 7 · Felipe

“O Front-end transforma os fluxos em telas utilizáveis no navegador. A área é necessária para que público e recepção consigam operar o serviço. Minhas entregas seriam programação, formulário, ingresso e painel, com versões adequadas a diferentes telas. Também precisaria prever carregamento, falha e lotação. Trabalharia com UX na experiência, com Back-end nas respostas e com Requisitos e Qualidade na conferência do fluxo. Na postagem, destaquei: ‘A mensagem de sucesso deve depender da confirmação do servidor.’ Se a vaga acabou durante o preenchimento, a tela precisa explicar isso corretamente.”

**Personalizar:** acrescentar a motivação de Felipe. **Pergunta para estudo:** esconder um botão é suficiente para proteger uma ação administrativa? Fonte: [MDN, fundamentos de Front-end](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core). Aplicações: [papel](../docs/03-papeis/felipe.md) e [postagem](../docs/04-linkedin/felipe.md).

### Slide 8 · Jairisson

“Back-end e Banco de Dados aplicam regras no servidor e mantêm os registros. Essa área é necessária para que inscrições e vagas permaneçam consistentes. Uma entrega seria o modelo que relaciona sessão, inscrição e ingresso. Outra seria a operação que evita confirmar duas pessoas para a última vaga. Isso exige tratamento de concorrência, além de uma simples consulta de quantidade. Requisitos esclarece a regra, UX e Front-end explicam os resultados e Qualidade verifica falhas. Na postagem: ‘Uma segunda leitura do mesmo ingresso deve informar que a entrada já foi registrada.’ O servidor precisa conferir o estado atual.”

**Personalizar:** acrescentar a motivação de Jairisson. **Pergunta para estudo:** o que acontece com o ingresso quando a inscrição é cancelada? Fontes: [MDN, servidor](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction) e [PostgreSQL, transações](https://www.postgresql.org/docs/current/tutorial-transactions.html). Aplicações: [papel](../docs/03-papeis/jairisson.md) e [postagem](../docs/04-linkedin/jairisson.md).

### Slide 9 · Flavio

“Segurança identifica riscos e controles. Qualidade verifica se o comportamento atende aos critérios, inclusive quando há falhas. Essa área é necessária porque as inscrições usam dados pessoais e sustentam decisões na recepção. Eu proporia um mapa de riscos, permissões por função e um plano de testes. Requisitos ajuda a definir o esperado, Back-end protege as operações e UX e Front-end colaboram na experiência acessível. O trecho da postagem diz: ‘Uma pessoa não deve conseguir consultar a inscrição de outra apenas alterando um identificador no endereço.’ Esse é um exemplo de teste de autorização que o servidor precisa atender.”

**Personalizar:** acrescentar a motivação de Flavio. **Pergunta para estudo:** como distinguir teste planejado de resultado comprovado? Fontes: [OWASP, autorização](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) e [guia de testes](https://owasp.org/www-project-web-security-testing-guide/). Aplicações: [papel](../docs/03-papeis/flavio.md) e [postagem](../docs/04-linkedin/flavio.md).

## Slide 10 · Flavio · 1 minuto e 10 segundos

“A proposta precisa cuidar da coleta e do acesso aos dados. O centro deve definir finalidade, base legal e retenção e oferecer um canal para atender os titulares. Propomos somente os dados necessários à inscrição. Um QR code pode ser copiado, por isso sua leitura precisa verificar validade e uso. Acessibilidade envolve teclado, contraste e mensagens claras, com avaliação humana. Também há limites operacionais: a equipe precisa manter a agenda atualizada e definir atendimento em caso de falha de internet ou de envio de avisos. Esses cuidados precisam ser desenvolvidos e verificados antes de um piloto.”

**Fontes:** [LGPD, texto oficial](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), [W3C](https://www.w3.org/WAI/fundamentals/accessibility-intro/) e [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html). Detalhes: [riscos e cuidados](../docs/02-solucao.md).

## Slide 11 · Felipe · 1 minuto

Abrir o repositório público já conferido, em uma aba preparada, e seguir esta ordem:

1. **15 segundos:** mostrar o README, a empresa, a equipe e o índice.
2. **15 segundos:** abrir a proposta da solução e apontar prioridades e cuidados.
3. **20 segundos:** mostrar as pastas de papéis e postagens e abrir um exemplo.
4. **10 segundos:** apontar organização e decisões, explicando o que o grupo realmente revisou e confirmou.

Se a internet falhar, permanecer no slide e usar os arquivos locais. Não afirmar que convites, revisões ou decisões foram concluídos sem verificar. Base: [organização](../docs/05-organizacao.md) e [decisões](../docs/06-decisoes.md).

## Slide 12 · Yan · 50 segundos

“Esperamos ajudar o público a encontrar a programação e a compreender como participar, enquanto a equipe passa a contar com registros consistentes de vagas e presença. Esses benefícios precisam ser avaliados em tarefas de consulta e na observação do atendimento. O próximo passo seria validar regras e protótipo com visitantes, coordenação e recepção. A entrega atual é uma proposta documentada, sem sistema implementado ou resultados medidos. Cada área contribui para uma parte dessa construção e depende da colaboração das demais.”

Base: [benefícios esperados](../docs/02-solucao.md).

## Ensaio e preparação

- Ler e compreender o próprio papel e a postagem antes de ensaiar.
- Preparar slides e repositório em abas separadas e manter o PDF disponível localmente.
- Cronometrar do primeiro ao último slide, incluindo trocas de pessoa e o tour pelo GitHub.
- Se passar de 14 minutos, reduzir repetições e exemplos, preservando a fala dos cinco e o comentário das postagens.
- Registrar a data e o tempo real em `docs/06-decisoes.md` somente após o ensaio.
- Ajustar o slide e a fala de organização depois das revisões, para refletir o que efetivamente aconteceu.
