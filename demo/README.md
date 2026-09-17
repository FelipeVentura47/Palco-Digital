# MVP demonstrativo · Palco Digital

Aplicação web estática criada para demonstrar a proposta na apresentação da disciplina. Funciona diretamente no navegador, sem instalação e sem servidor próprio.

**Acesso público:** [felipeventura47.github.io/Palco-Digital/demo](https://felipeventura47.github.io/Palco-Digital/demo/)

## O que pode ser demonstrado

1. Consultar e filtrar a programação por texto, categoria e data.
2. Abrir uma atividade e conferir horário, local, regras e vagas.
3. Fazer uma inscrição com dados fictícios e gerar um ingresso demonstrativo.
4. Cancelar a inscrição e devolver a vaga à atividade.
5. Entrar no **Painel da equipe** e cadastrar ou cancelar uma atividade.
6. Publicar um aviso que passa a aparecer na programação.
7. Validar o código do ingresso e registrar o check-in.
8. Tentar validar o mesmo código novamente e observar o bloqueio de reutilização.
9. Restaurar os dados iniciais para repetir a demonstração.

## Roteiro rápido para a aula

- Abra **Programação** e mostre os filtros.
- Escolha uma oficina e faça uma inscrição usando nome e e-mail fictícios.
- Copie ou memorize o código exibido no ingresso.
- Abra **Painel da equipe**, informe o código e registre a entrada.
- Repita o check-in para mostrar a mensagem de ingresso já utilizado.
- Publique um aviso ou cancele uma atividade e volte à programação para mostrar a atualização.

## Limitações intencionais

Este é um demonstrador acadêmico em HTML, CSS e JavaScript. Os dados ficam em `localStorage`, apenas no navegador utilizado. Não há autenticação real, banco de dados, envio de e-mail, sincronização entre dispositivos nem QR code escaneável. O painel da equipe é aberto para facilitar a apresentação.

Essas limitações não representam a arquitetura proposta para produção. Uma implementação real precisaria de servidor, banco de dados, controle de concorrência, autenticação, autorização, proteção de dados, registros operacionais e testes de segurança e acessibilidade.

## Executar localmente

É possível abrir `index.html` diretamente. Para testar com um servidor local:

```bash
python3 -m http.server 4173
```

Depois, acessar `http://localhost:4173/demo/` a partir da raiz do repositório.
