"""Gera slides.pdf a partir de slides.md. Requer ReportLab e DejaVu Sans."""
from pathlib import Path
import os
import re
from xml.sax.saxutils import escape

from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parent
FONT_DIR = Path(os.environ.get("PALCO_FONT_DIR", "/usr/share/fonts/truetype/dejavu"))
for name, filename in [("DejaVu", "DejaVuSans.ttf"), ("DejaVu-Bold", "DejaVuSans-Bold.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))

W, H = 960, 540
INK = HexColor("#351B30")
MUTED = HexColor("#675C60")
ACCENT = HexColor("#9E3E24")
PAPER = HexColor("#FBF8F2")


def paragraph(c, text, x, top, width, size=19, color=INK, bold=False, limit=130):
    style = ParagraphStyle("text", fontName="DejaVu-Bold" if bold else "DejaVu",
                           fontSize=size, leading=size * 1.34, textColor=color,
                           spaceBefore=0, spaceAfter=0)
    p = Paragraph(escape(text).replace("\n", "<br/>"), style)
    _, height = p.wrap(width, 1000)
    if height > limit:
        raise ValueError(f"Texto excede a área disponível ({height:.1f} > {limit}): {text[:80]}")
    if top - height < 35:
        raise ValueError(f"Texto invade o rodapé: {text[:80]}")
    p.drawOn(c, x, top - height)
    return height


def read_slides():
    raw = (ROOT / "slides.md").read_text(encoding="utf-8")
    parts = re.split(r"^## \d+\. ", raw, flags=re.M)[1:]
    slides = []
    for part in parts:
        title, body = part.split("\n", 1)
        subtitle = re.search(r"^> (.+)$", body, re.M).group(1)
        blocks = []
        for block in re.split(r"^### ", body, flags=re.M)[1:]:
            heading, text = block.split("\n", 1)
            blocks.append((heading, " ".join(text.split())))
        slides.append((title, subtitle, blocks))
    return slides


def main():
    slides = read_slides()
    if len(slides) != 12:
        raise ValueError("Esta versão do roteiro prevê exatamente 12 slides.")
    target = ROOT / "slides.pdf"
    c = canvas.Canvas(str(target), pagesize=(W, H), pageCompression=1)
    c.setTitle("Palco Digital - Proposta para um centro cultural")
    c.setAuthor("Equipe Palco Digital")
    c.setSubject("Designer Profissional - proposta acadêmica")
    for index, (title, subtitle, blocks) in enumerate(slides, 1):
        if index == 1:
            c.drawImage(str(ROOT / "assets" / "centro-cultural.png"), 0, 0,
                        width=W, height=H, preserveAspectRatio=False)
            paragraph(c, "Palco\nDigital", 48, 439, 320, 51, bold=True, limit=150)
            paragraph(c, subtitle, 50, 270, 295, 20, limit=135)
            paragraph(c, "Empresa fictícia\nDesigner Profissional", 50, 112, 245, 14,
                      color=INK, limit=50)
        else:
            c.setFillColor(PAPER)
            c.rect(0, 0, W, H, fill=1, stroke=0)
            paragraph(c, title, 52, 494, 856, 32, bold=True, limit=86)
            paragraph(c, subtitle, 54, 429, 852, 17, color=MUTED, limit=49)
            if len(blocks) != 4:
                raise ValueError(f"Slide {index}: esperado quatro blocos de conteúdo")
            for n, (heading, text) in enumerate(blocks):
                x = 54 if n % 2 == 0 else 500
                top = 358 if n < 2 else 198
                paragraph(c, heading, x, top, 405, 19, color=ACCENT, bold=True, limit=52)
                paragraph(c, text, x, top - 36, 405, 19, limit=113)
            c.setFillColor(MUTED)
            c.setFont("DejaVu", 10)
            c.drawString(54, 21, "Palco Digital")
            c.drawRightString(906, 21, f"{index:02d} / {len(slides):02d}")
        c.showPage()
    c.save()
    print(f"Gerado: {target} ({len(slides)} slides)")


if __name__ == "__main__":
    main()
