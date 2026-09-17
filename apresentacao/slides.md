# Apresentação · Palco Digital

Fonte editável do PDF. As falas e referências estão em `roteiro.md`.

## 01. Palco Digital

> Tecnologia para organizar a programação e a participação em centros culturais

### Empresa fictícia

Proposta acadêmica da disciplina Designer Profissional

## 02. O problema do centro cultural

> Programação dispersa e dificuldade para organizar inscrições

### Para o visitante

Horários, atividades disponíveis e regras são difíceis de encontrar em diferentes canais.

### Para a equipe

O centro precisa organizar os registros de inscrição e acompanhar quem pode participar.

### Necessidade central

Uma programação oficial, com informação clara e controle consistente de participação.

### Limite da análise

O caso vem do enunciado. Ainda não houve entrevistas ou medição dos efeitos na rotina.

## 03. Uma plataforma web para participar

> Acesso pelo navegador do celular ou computador

### O visitante consulta

Filtra atividades e confere horário, local, regras e disponibilidade antes de se inscrever.

### A coordenação organiza

Cadastra a programação, define vagas e comunica alterações aos inscritos.

### A inscrição confirma a vaga

O servidor registra a participação e emite um ingresso com código legível e QR code.

### A recepção confere

Valida o ingresso, registra presença e oferece inscrição assistida no mesmo controle de vagas.

## 04. Prioridades da primeira versão

> Proposta inicial para um centro cultural e atividades gratuitas

### Primeiro, a programação

Consulta pública, filtros, regras e cadastro administrativo com acesso restrito.

### Depois, a participação

Inscrição, cancelamento, controle de vagas, ingresso, presença e avisos compõem o MVP.

### Evoluções possíveis

Lista de espera, relatórios agregados e área própria de oficineiros, após validação.

### Critério para avançar

Duas solicitações para a última vaga devem produzir somente uma confirmação.

## 05. Yan: Requisitos e Produto

> Entender as necessidades e definir o que será desenvolvido primeiro

### Por que esse papel

As regras de capacidade e cancelamento precisam ser claras para todas as áreas.

### Entregas propostas

Mapa de usuários, prioridades do MVP e critérios de aceitação para cada fluxo.

### Trabalho em conjunto

UX e Front-end explicam a regra. Back-end a aplica. Qualidade verifica o resultado.

### Trecho da postagem

“A confirmação só aparece depois que o sistema registra a vaga disponível.”

## 06. Ycaro: UX/UI e Acessibilidade

> Organizar a experiência para um público com diferentes necessidades

### Por que esse papel

Uma programação reunida só ajuda se as pessoas encontrarem e entenderem a informação.

### Entregas propostas

Fluxo do visitante, protótipo e orientações de navegação, campos e mensagens.

### Trabalho em conjunto

Requisitos e Back-end esclarecem estados. Front-end implementa. Qualidade avalia barreiras.

### Trecho da postagem

“A navegação precisa funcionar para quem utiliza teclado.”

## 07. Felipe: Desenvolvimento Front-end

> Transformar os fluxos em telas utilizáveis no navegador

### Por que esse papel

O público e a recepção precisam consultar e operar o serviço com respostas claras.

### Entregas propostas

Programação, formulário, ingresso e painel, com estados de erro, lotação e confirmação.

### Trabalho em conjunto

UX orienta a interação. Back-end fornece respostas. Requisitos e Qualidade conferem o fluxo.

### Trecho da postagem

“A mensagem de sucesso deve depender da confirmação do servidor.”

## 08. Jairisson: Back-end e Dados

> Aplicar regras e manter registros consistentes

### Por que esse papel

A capacidade não pode ser ultrapassada quando várias pessoas solicitam vagas ao mesmo tempo.

### Entregas propostas

Modelo de dados e operações de inscrição, cancelamento e validação de ingresso.

### Trabalho em conjunto

Requisitos define regras. UX e Front-end explicam estados. Qualidade testa concorrência e acesso.

### Trecho da postagem

“Uma segunda leitura do mesmo ingresso deve informar que a entrada já foi registrada.”

## 09. Flavio: Segurança e Qualidade

> Proteger dados e verificar os fluxos, inclusive quando algo falha

### Por que esse papel

Inscrições envolvem dados pessoais e precisam de controle de acesso e verificação das regras.

### Entregas propostas

Mapa de riscos, permissões por função, plano de testes e registros de falhas.

### Trabalho em conjunto

Requisitos define critérios. Back-end protege operações. UX e Front-end apoiam o uso acessível.

### Trecho da postagem

“Uma pessoa não deve conseguir consultar a inscrição de outra apenas alterando um identificador no endereço.”

## 10. Cuidados para um futuro piloto

> Segurança, privacidade e acessibilidade acompanham o MVP

### Dados pessoais

Coletar somente o necessário, definir finalidade, acesso e retenção e oferecer canal de atendimento.

### Ingressos e permissões

Consultar a validade no servidor e impedir reutilização. Um QR code pode ser copiado.

### Acessibilidade

Teclado, foco visível, contraste e mensagens claras, com avaliação humana além de ferramentas.

### Operação

Equipe mantém a agenda atualizada. Falhas de internet e avisos exigem alternativas de atendimento.

## 11. A documentação no GitHub

> github.com/FelipeVentura47/Palco-Digital

### Apresentação e solução

README apresenta a empresa e o grupo. Os documentos 01 e 02 explicam problema, proposta e prioridades.

### Contribuições individuais

As pastas 03-papeis e 04-linkedin reúnem cinco descrições profissionais e cinco postagens.

### Organização e decisões

Os documentos 05 e 06 distinguem o que foi preparado e o que o grupo ainda precisa confirmar.

### Revisão antes da entrega

Cada integrante assume seu texto. O grupo registra revisões, confere os links e realiza um ensaio.

## 12. Benefícios esperados e próximo passo

> A proposta precisa ser validada com quem usará o serviço

### Para o público

Encontrar atividades e compreender as regras com menos dificuldade. Avaliar com tarefas de consulta.

### Para o centro cultural

Confiar nos registros de vagas e presença. Conferir consistência e observar o atendimento.

### Próximo passo

Validar regras e protótipo com visitantes, coordenação e recepção antes de desenvolver um piloto.

### Estado da proposta

Empresa fictícia e solução documentada. Sem sistema implementado ou resultados medidos.
