# 02 · Proposta de solução

> **Demonstração:** há um [MVP acadêmico executável](../demo/index.html) dos fluxos principais. Ele usa dados fictícios e armazenamento local. As regras e a arquitetura descritas neste documento continuam sendo a referência para uma implementação real.

## Formato escolhido

Uma **plataforma web responsiva**, acessível pelo navegador do celular ou computador. A escolha permite compartilhar o mesmo endereço nos canais de divulgação e dispensa a instalação de um aplicativo. O produto terá uma área pública e um painel restrito à equipe do centro cultural.

Consideramos inicialmente um centro cultural e atividades gratuitas. Pagamentos, integração com redes sociais, aplicativo nativo e operação completa sem internet ficam fora do MVP. MVP significa a primeira versão com o conjunto mínimo de funções necessárias para validar o serviço.

## Usuários e acesso

| Perfil | O que poderá fazer |
|---|---|
| Público sem autenticação | Consultar atividades, horários, regras e avisos públicos |
| Inscrito com acesso protegido | Consultar seu ingresso e solicitar cancelamento, sem acesso a inscrições de outras pessoas |
| Recepção autenticada | Fazer inscrição assistida, localizar a inscrição necessária ao atendimento e registrar presença |
| Coordenação autenticada | Criar e alterar atividades, definir vagas, acompanhar inscrições e emitir avisos |
| Oficineiro ou guia | Receber agenda e totais pela coordenação no MVP. Uma área própria poderá ser estudada depois |

O acesso do inscrito poderá usar um link individual enviado ao contato verificado. Esse link deverá ter token aleatório e prazo de validade. O QR code usado na entrada será separado do acesso de gerenciamento: possuir o ingresso não deverá permitir alterar dados do inscrito.

## Fluxo do visitante

1. Acessar a programação oficial e filtrar por data ou tipo de atividade.
2. Abrir uma atividade e consultar local, horário, vagas e regras, inclusive acessibilidade do espaço quando essa informação estiver disponível.
3. Informar nome e um contato para inscrição. A necessidade de cada dado deverá ser validada com o centro cultural.
4. Receber a confirmação somente após o servidor registrar a vaga. Se estiver lotado, visualizar a indisponibilidade sem receber uma confirmação falsa.
5. Acessar o ingresso com código legível e QR code, que também poderá ser impresso.
6. Apresentar o ingresso na recepção. A equipe consulta o estado e registra a entrada.
7. Consultar avisos da atividade e solicitar cancelamento pelo acesso protegido, conforme a regra publicada.

Quem não puder usar o canal digital poderá receber ajuda da recepção. A inscrição assistida utilizará o mesmo controle de vagas. Um cadastro feito fora desse controle só será considerado confirmado após conciliação pela equipe.

## Fluxo da equipe do centro cultural

1. A coordenação entra no painel com sua própria conta e cadastra atividade e sessão.
2. Informa data, horário, local, capacidade, prazo de inscrição e regras. Publica após conferir os dados.
3. Acompanha inscrições confirmadas e canceladas e orienta a recepção.
4. Se houver mudança, atualiza a página da atividade e solicita aviso individual aos inscritos pelo canal definido.
5. A recepção confere ingressos. O sistema distingue válido, cancelado, já utilizado e pertencente a outra sessão.
6. Após a atividade, a coordenação consulta totais de inscritos e presentes. Dados pessoais seguem a política de retenção definida para sua finalidade.

## Funcionalidades e prioridade

| ID | Função | Prioridade e motivo |
|---|---|---|
| F01 | Programação unificada com filtro por data e tipo | MVP: responde diretamente à dificuldade de encontrar informações |
| F02 | Página com horário, local, regras e disponibilidade | MVP: ajuda a decidir se e como participar |
| F03 | Cadastro e edição de atividades e sessões | MVP: mantém a fonte oficial de informação |
| F04 | Inscrição, cancelamento e controle de vagas | MVP: organiza a participação sem ultrapassar a capacidade |
| F05 | Ingresso com código legível e QR code | MVP: identifica uma inscrição na entrada |
| F06 | Lista restrita de inscritos e registro de presença | MVP: apoia o trabalho da recepção |
| F07 | Aviso público e comunicação aos inscritos sobre mudanças | MVP: reduz desencontros. O canal inicial proposto é e-mail |
| F08 | Contas da equipe e permissões por função | MVP: restringe ações administrativas e acesso a dados |
| F09 | Lista de espera com regras de convocação | Depois: exige regras adicionais de prazo e prioridade |
| F10 | Relatórios agregados de ocupação por período | Depois: depende de registros consistentes e perguntas de gestão claras |
| F11 | Área de oficineiros e guias | Depois: só se a coordenação confirmar a necessidade |

Acessibilidade, privacidade e segurança são critérios do MVP e devem acompanhar o desenvolvimento de todas as funções.

## Ordem proposta de desenvolvimento

1. **Entendimento e experiência:** validar regras e usuários, priorizar o trabalho e revisar um protótipo com pessoas representativas do público.
2. **Programação:** construir cadastro administrativo, sessão e consulta pública, com as permissões necessárias.
3. **Participação:** implementar inscrição e controle de vagas, cancelamento e ingresso, testando solicitações simultâneas.
4. **Operação:** acrescentar registro de presença e avisos, preparar o atendimento assistido e testar os fluxos completos.
5. **Piloto:** usar uma atividade de escopo reduzido, colher dificuldades e decidir sobre evolução.

Não há estimativa de prazo ou custo de implementação: isso exige conhecer equipe, infraestrutura e volume de uso.

## Regras propostas e critérios de aceitação

| Cenário | Resultado esperado |
|---|---|
| Duas pessoas solicitam a última vaga ao mesmo tempo | Somente uma inscrição é confirmada. A outra recebe informação de lotação |
| A mesma solicitação é repetida por falha de conexão | O servidor reconhece a repetição e evita gerar duas inscrições para a mesma operação |
| O inscrito cancela dentro do prazo | A inscrição muda para cancelada, o ingresso perde validade e a vaga volta a ficar disponível |
| A coordenação tenta reduzir a capacidade abaixo das inscrições ativas | A alteração é bloqueada e a equipe precisa tratar a situação antes de reduzir a capacidade |
| Um ingresso é lido duas vezes | A segunda leitura informa que já houve entrada e não registra uma nova presença |
| A atividade é cancelada | Novas inscrições e entradas são bloqueadas e um aviso fica visível na página |
| Uma pessoa tenta consultar uma inscrição de outra | O servidor recusa o acesso, mesmo que a pessoa altere o endereço ou o identificador |
| O e-mail de confirmação falha | A inscrição registrada permanece válida. O envio fica marcado para nova tentativa e há alternativa de atendimento |
| O visitante navega usando somente teclado | Consegue consultar, preencher e enviar o formulário, com foco e mensagens compreensíveis |

Esses são **testes planejados para um desenvolvimento futuro**. Não representam testes de um sistema já implementado.

## Dados e funcionamento técnico em linguagem simples

O navegador mostra as telas. O servidor aplica as regras e conversa com o banco de dados. O banco registra atividades, sessões, inscrições e o estado dos ingressos. O envio de aviso ocorre após o registro da operação, com acompanhamento de falha e tentativa de reenvio.

| Informação | Exemplos de campos propostos | Cuidado |
|---|---|---|
| Atividade | Título, tipo, descrição e regras | Conferência antes de publicar |
| Sessão | Atividade, data, horário, local, capacidade e estado | Toda vaga pertence a uma sessão específica |
| Inscrição | Sessão, nome, contato, estado e data de registro | Acesso limitado à necessidade de atendimento |
| Ingresso | Inscrição, token e estado de uso | QR code sem nome, e-mail ou outros dados pessoais em texto aberto |
| Conta da equipe | Identificador, credencial protegida e função | Contas individuais e menor privilégio |
| Aviso e registro operacional | Sessão, conteúdo, autor, estado de envio e horário | Evitar dados pessoais desnecessários nos registros |

A confirmação precisa verificar a capacidade e gravar a inscrição como uma operação consistente. Uma transação isolada, sem estratégia adequada para acessos concorrentes, não basta para impedir disputa de vagas. O desenho deverá combinar transação com bloqueio ou atualização condicional e restrições apropriadas. A documentação de [transações do PostgreSQL](https://www.postgresql.org/docs/current/tutorial-transactions.html) serve como referência conceitual, sem definir obrigatoriamente a tecnologia do projeto.

## Benefícios esperados e como avaliar

| Benefício esperado | Como verificar em um piloto |
|---|---|
| Visitante encontra horário e regras com menos dificuldade | Observar se consegue concluir essa tarefa e registrar dúvidas |
| Coordenação mantém a informação consistente | Comparar a programação publicada com a agenda aprovada |
| Inscrições respeitam a capacidade | Conferir totais e executar o cenário de disputa da última vaga |
| Recepção confere entradas com menos retrabalho | Observar o fluxo e registrar falhas ou buscas manuais |
| Mais pessoas conseguem usar o canal digital | Fazer avaliação humana de acessibilidade com diferentes formas de interação |

Não foram medidos ganhos percentuais. O impacto depende de uso, treinamento e atualização da programação.

## Limitações, riscos e cuidados

**Privacidade e responsabilidade.** A proposta segue a orientação de definir finalidade, limitar a coleta ao necessário e proteger o acesso. A base legal deve ser identificada para cada tratamento, sem presumir que todo uso se resolve com consentimento. O centro deverá definir responsáveis, prazo de retenção, canal para exercício de direitos e procedimento para incidentes. O MVP não propõe coletar CPF, documentos ou dados de saúde. Caso haja participação de menores ou necessidade de dados sensíveis, o fluxo exige análise específica antes da implementação. Referência: [LGPD, especialmente arts. 6º, 7º, 14, 18 e 46](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm).

**Segurança.** Validar permissões no servidor em cada operação, usar conexão protegida, credenciais tratadas com mecanismos apropriados e cópias de segurança com restauração verificada. QR code pode ser copiado: ele identifica uma inscrição, mas não prova identidade. A leitura deve consultar o estado atual e impedir reutilização. O acesso ao painel e à lista de inscritos será restrito. Referência: [OWASP, controle de autorização](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

**Acessibilidade.** Planejar navegação por teclado, foco visível, textos compreensíveis, contraste adequado, rótulos de formulário e mensagens de erro associadas ao campo. A avaliação inclui pessoas e tecnologias assistivas, porque uma ferramenta automática não comprova acessibilidade completa. Referências: [introdução à acessibilidade do W3C](https://www.w3.org/WAI/fundamentals/accessibility-intro/) e [formulários acessíveis](https://www.w3.org/WAI/tutorials/forms/).

**Dependência de internet e contato.** O fluxo digital de confirmação e check-in depende de conexão. A recepção precisa de um procedimento de contingência definido com a coordenação. Registros manuais temporários terão acesso restrito e conciliação posterior, sem prometer validação automática offline. E-mails podem atrasar ou não chegar, por isso o aviso também fica na página e o atendimento humano continua disponível.

**Operação e manutenção.** Uma plataforma não mantém a programação atualizada sozinha. É necessário atribuir responsáveis pelo cadastro e atendimento, treinar a equipe, pagar infraestrutura quando aplicável e corrigir falhas. Uso de imagem das atividades exige autorização ou licença adequada.

**Escopo.** A proposta não contempla venda de ingressos, recomendação por IA, múltiplas unidades ou integrações externas complexas na primeira versão. As evoluções dependem da validação do problema e dos recursos disponíveis.
