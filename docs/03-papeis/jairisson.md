# Jairisson · Desenvolvimento Back-end e Banco de Dados

**Atribuição proposta, pendente de confirmação pelo integrante.**

## 1. O que esse profissional faz

Desenvolve as operações executadas no servidor e organiza os dados que precisam permanecer registrados. O back-end valida solicitações e aplica regras. O trabalho com banco de dados define relações, restrições e formas confiáveis de consulta. No Palco Digital, isso inclui atividades, sessões, inscrições, ingressos e permissões.

## 2. Principais responsabilidades

- Implementar operações de consulta, inscrição, cancelamento e presença.
- Validar no servidor a disponibilidade e a autorização de cada ação.
- Modelar dados e preservar vínculos entre sessão, inscrição e ingresso.
- Tratar concorrência, repetição de solicitações e falhas de operações.
- Combinar com a equipe procedimentos de backup e recuperação.

## 3. Conhecimentos e competências importantes

Lógica de programação, uma linguagem de servidor, APIs, SQL, modelagem relacional, transações e testes de integração. São importantes raciocínio sobre estados e atenção a falhas. A MDN descreve o servidor como responsável por processar solicitações, validar dados e consultar a persistência. A documentação do PostgreSQL explica transações como agrupamento de operações que devem produzir um resultado consistente.

## 4. Entregas que produziria neste projeto

Modelo de dados, operações para consultar programação e administrar inscrições, regras de validação, tratamento de tokens e documentação das respostas para o front-end.

O principal exemplo é a disputa da última vaga. Verificar a quantidade em uma consulta e gravar depois, sem proteção contra concorrência, pode confirmar duas pessoas. A implementação precisa verificar e reservar a vaga com transação e estratégia adequada de bloqueio ou atualização condicional. Também deve reconhecer a repetição da mesma operação e impedir dois registros de presença para o mesmo ingresso.

## 5. Como sua atuação ajuda a resolver o problema

O controle de participação depende de registros confiáveis. Cada inscrição precisa pertencer à sessão correta, e cancelamentos precisam alterar a disponibilidade e a validade do ingresso. Esse trabalho permite que a programação e a recepção utilizem a mesma informação operacional.

**Justificativa proposta para a escolha:** esse papel sustenta o controle de vagas, que é uma necessidade central do centro cultural. Jairisson deve complementar essa justificativa com sua motivação pessoal.

## 6. Com quais outros papéis precisa trabalhar

- **Yan, Requisitos e Produto:** formalizar capacidade, prazos e exceções.
- **Ycaro, UX/UI:** combinar dados mínimos e estados que precisam ser compreendidos pelo usuário.
- **Felipe, Front-end:** definir contratos de comunicação, respostas e identificação de erros.
- **Flavio, Segurança e Qualidade:** revisar autorização, dados pessoais, concorrência e recuperação de falhas.

## 7. O que aconteceria sem esse papel

A aplicação poderia mostrar telas bonitas, mas perder registros ou confirmar vagas além do limite. Alterar um endereço poderia expor dados de outro participante se o acesso não fosse validado no servidor. O projeto precisa que essas responsabilidades tenham tratamento explícito, independentemente do nome do cargo.

## Fontes e leitura

- [MDN, Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction).
- [PostgreSQL, Transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html).

Consulta: 13/09/2026. Não há banco ou API implementados nesta entrega.

[Postagem de Jairisson](../04-linkedin/jairisson.md) · [Solução](../02-solucao.md)
