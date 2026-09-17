# Como colaborar

## Entrar no repositório

Felipe, proprietário do repositório informado, já conta com acesso como dono. Os outros quatro integrantes precisam informar seus usuários do GitHub para que ele envie os convites. Cada colega precisa aceitar o próprio convite. Não compartilhem senhas ou tokens.

O repositório deve estar público para que a professora consiga ler a documentação sem convite. Dados de inscritos, contatos particulares, credenciais e informações de sistemas reais não pertencem a este repositório.

## Revisar os materiais

1. Ler o README e a proposta da solução.
2. Confirmar a atribuição do próprio papel ou combinar uma troca com o grupo.
3. Revisar `docs/03-papeis/<nome>.md` e `docs/04-linkedin/<nome>.md`, verificando os sete blocos do papel e a coerência da postagem.
4. Acrescentar uma justificativa pessoal verdadeira para a escolha da área. O material atual oferece uma justificativa ligada ao projeto, sem inventar experiências pessoais.
5. Pedir a revisão de outro integrante e registrar apenas decisões efetivamente combinadas em `docs/06-decisoes.md`.
6. Atualizar os slides e o roteiro caso a divisão ou a solução mude.

## Editar pelo GitHub

Abrir o arquivo, usar a opção de edição, alterar o texto e salvar com uma mensagem que explique o conteúdo. Para facilitar a revisão, preferir uma branch e uma solicitação de alteração (pull request) quando possível. Exemplos de mensagens: `docs: revisa papel de UX e acessibilidade` ou `docs: confirma divisão de papéis`.

## Trabalhar pelo terminal

```bash
git clone https://github.com/FelipeVentura47/Palco-Digital.git
cd Palco-Digital
git switch -c docs/revisao-meu-papel
# Editar os arquivos do próprio papel e postagem.
git add docs/03-papeis/ docs/04-linkedin/
git commit -m "docs: revisa contribuição individual"
git push -u origin docs/revisao-meu-papel
```

Depois, abrir a solicitação de alteração no GitHub. Antes de salvar, conferir se somente arquivos pertinentes ao trabalho foram incluídos. O histórico deve refletir contribuições reais, sem commits em nome de colegas que não os fizeram.
