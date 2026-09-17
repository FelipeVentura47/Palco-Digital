# Flavio Mathias · Segurança da Informação e Testes/Qualidade

**Atribuição proposta, pendente de confirmação pelo integrante.**

## 1. O que esse profissional faz

Segurança da Informação identifica riscos e propõe controles para proteger dados e operações. Testes e Qualidade verificam se o comportamento atende ao esperado, incluindo erros e situações de uso adversas. As áreas se complementam nesta equipe pequena, mas não concentram em uma única pessoa toda a responsabilidade por segurança e qualidade.

## 2. Principais responsabilidades

- Identificar quais dados serão usados e quem precisa acessá-los.
- Revisar permissões e regras de acesso ao painel e às inscrições.
- Planejar testes a partir dos critérios de aceitação.
- Registrar falhas com passos de reprodução e acompanhar correções.
- Avaliar proteção dos ingressos, recuperação de dados e acessibilidade junto às demais áreas.

## 3. Conhecimentos e competências importantes

Fundamentos de segurança web, autenticação e autorização, privacidade, técnicas de teste, registro de defeitos e análise de riscos. Também são importantes comunicação e atenção à diferença entre um teste planejado e uma evidência de execução. A OWASP oferece referências de avaliação de aplicações web e de verificação de autorização. A LGPD orienta responsabilidades no tratamento de dados pessoais.

## 4. Entregas que produziria neste projeto

Mapa de riscos, matriz de acesso, plano de testes, registros de falhas e checklist para um piloto. Exemplos de casos: disputar a última vaga, reutilizar ingresso, apresentar ingresso de outra sessão, cancelar inscrição e tentar consultar dados sem permissão.

Cada caso deve indicar preparação, ação e resultado esperado. Por exemplo: com uma conta da recepção, tentar alterar a capacidade de uma sessão deve resultar em acesso negado, pois a proposta reserva essa função à coordenação. A verificação deve ocorrer no servidor, mesmo se o botão não aparecer na tela.

## 5. Como sua atuação ajuda a resolver o problema

Organizar inscrições cria responsabilidade sobre nomes e contatos. Uma lista pública de participantes ou uma confirmação incorreta pode prejudicar o público e o centro cultural. A área ajuda a detectar problemas antes de um piloto e a preparar resposta quando uma falha ocorrer.

**Justificativa proposta para a escolha:** esse papel é necessário porque confiança no controle de vagas e no uso dos dados faz parte do atendimento. Flavio deve acrescentar sua motivação pessoal antes da apresentação.

## 6. Com quais outros papéis precisa trabalhar

- **Yan, Requisitos e Produto:** definir critérios verificáveis e priorizar riscos.
- **Ycaro, UX/UI:** revisar coleta de dados e barreiras de acessibilidade.
- **Felipe, Front-end:** reproduzir falhas de interface e verificar mensagens e navegação.
- **Jairisson, Back-end e Dados:** examinar autorização, tokens, consistência e recuperação de registros.

## 7. O que aconteceria sem esse papel

A equipe poderia testar apenas o caminho em que tudo dá certo e deixar passar falhas de permissão, duplicação ou indisponibilidade. Um QR code legível não garante, sozinho, que o ingresso seja válido. Sem revisão sistemática, problemas podem aparecer apenas na entrada do evento. Os demais integrantes também continuam responsáveis por prevenir e corrigir essas falhas.

## Fontes e leitura

- [OWASP, Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/).
- [OWASP, Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).
- [LGPD, texto oficial](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).

Consulta: 13/09/2026. Os casos acima são planejados, sem execução sobre um software nesta atividade.

[Postagem de Flavio](../04-linkedin/flavio.md) · [Solução](../02-solucao.md)
