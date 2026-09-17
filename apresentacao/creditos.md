# Créditos e edição da apresentação

- **Conteúdo:** proposta acadêmica Palco Digital, elaborada a partir do enunciado e do problema fornecidos à equipe, com apoio de IA.
- **Ilustração da capa:** imagem original gerada por IA em 13/09/2026. Centro cultural fictício, em estilo de colagem editorial, com exposição, oficina e palco. Não representa cliente ou implantação real.
- **Arquivo da ilustração:** `assets/centro-cultural.png`.
- **Fontes de pesquisa:** [referências](../docs/07-referencias.md). As notas correspondentes a cada slide aparecem no [roteiro](roteiro.md).
- **Tipografia:** DejaVu Sans, incorporada ao PDF.
- **Formato:** PDF com 12 slides em 16:9. A versão atual utiliza uma atribuição proposta de papéis.

## Editar e gerar novamente

O arquivo `slides.md` é a fonte editável. O script `gerar_slides.py` lê seus títulos, subtítulos e blocos para gerar `slides.pdf`. O roteiro fica em arquivo separado e deve ser ajustado junto com os slides.

Para gerar, executar em um ambiente Python com ReportLab instalado e fontes DejaVu Sans disponíveis:

```bash
python3 apresentacao/gerar_slides.py
```

O comando atualiza o PDF. Depois de alterar o conteúdo, conferir todas as páginas visualmente antes de apresentar. Textos longos podem exigir reorganização do slide. Não há arquivo PowerPoint nesta versão.
