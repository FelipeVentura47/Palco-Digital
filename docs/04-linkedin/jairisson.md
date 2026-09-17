# Proposta de postagem · Jairisson

**Papel:** Desenvolvimento Back-end e Banco de Dados.

**Contexto:** simulação acadêmica em uma empresa fictícia. Texto para revisão individual, sem necessidade de publicação real.

## Texto da postagem

Na proposta da Palco Digital, uma situação orienta meu trabalho com back-end e banco de dados: duas pessoas tentam se inscrever na última vaga de uma oficina.

Se o sistema apenas consultar a quantidade disponível e registrar cada pedido depois, pode acabar confirmando as duas inscrições. Minha contribuição seria planejar uma operação que verifique e reserve a vaga de forma consistente, considerando solicitações simultâneas.

Também proponho manter uma ligação clara entre atividade, sessão, inscrição e ingresso. Um cancelamento precisa liberar a vaga conforme a regra definida e impedir que o ingresso continue válido. Na recepção, uma segunda leitura do mesmo ingresso deve informar que a entrada já foi registrada.

Essas decisões exigem conversa com Requisitos para definir as regras, com Front-end para explicar os resultados na tela e com Segurança e Qualidade para verificar permissões e situações de falha.

Antes de um piloto, eu testaria concorrência, repetição de solicitações e cancelamento. O objetivo é oferecer registros em que a coordenação e a recepção possam confiar. Como ainda estamos na proposta, esses comportamentos representam critérios para o desenvolvimento, e não resultados de um sistema já em operação.

#BackEnd #BancoDeDados #TecnologiaECultura

## Antes da entrega

Jairisson deve confirmar o papel, ler a [descrição profissional](../03-papeis/jairisson.md) e revisar a postagem. Não há alegação de API ou banco implementados.
