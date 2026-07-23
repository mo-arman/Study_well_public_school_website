"""
Regenerates public/documents/fee-structure.pdf from the fee data below.
Keep this data in sync with the `feeStructure` object in lib/siteConfig.ts.

Run with: python3 scripts/generate_fee_pdf.py
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

NAVY = colors.HexColor("#0B3D91")
GOLD = colors.HexColor("#C9A227")
MIST = colors.HexColor("#EEF1F5")
INK = colors.HexColor("#12203A")

SCHOOL_NAME = "Study Well Public School"
AFFILIATION = "CBSE Affiliated | Affiliation No. 2131025"
CITY = "Sitapur, Uttar Pradesh"
ACADEMIC_YEAR = "2026-27"

CLASSES = [
    ["Class", "Admission Fee", "Tuition Fee / Month", "Annual Charges"],
    ["Play Group - Nursery", "TBD", "TBD", "TBD"],
    ["LKG - UKG", "TBD", "TBD", "TBD"],
    ["Class I - V", "TBD", "TBD", "TBD"],
    ["Class VI - VIII", "TBD", "TBD", "TBD"],
    ["Class IX - X", "TBD", "TBD", "TBD"],
    ["Class XI - XII (Science)", "TBD", "TBD", "TBD"],
    ["Class XI - XII (Commerce/Humanities)", "TBD", "TBD", "TBD"],
]

INCLUDES = [
    "Tuition fee",
    "Library & lab charges",
    "Smart classroom / digital learning fee",
    "Sports & activity fee",
]

EXCLUDES = [
    "One-time admission fee (new admissions only)",
    "Transport fee (route-wise, optional)",
    "Uniform, books & stationery",
    "Examination fee",
]

OUTPUT_PATH = "public/documents/fee-structure.pdf"


def build_pdf():
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        "TitleStyle", parent=styles["Title"], textColor=NAVY,
        fontSize=18, spaceAfter=2, alignment=TA_CENTER
    )
    sub_style = ParagraphStyle(
        "SubStyle", parent=styles["Normal"], textColor=INK,
        fontSize=9, alignment=TA_CENTER, spaceAfter=2
    )
    h2_style = ParagraphStyle(
        "H2", parent=styles["Heading2"], textColor=NAVY, fontSize=13,
        spaceBefore=14, spaceAfter=8
    )
    body_style = ParagraphStyle(
        "Body", parent=styles["Normal"], textColor=INK, fontSize=9.5,
        leading=14
    )
    note_style = ParagraphStyle(
        "Note", parent=styles["Normal"], textColor=colors.HexColor("#6b7280"),
        fontSize=8, leading=12, spaceBefore=10
    )

    doc = SimpleDocTemplate(
        OUTPUT_PATH, pagesize=A4,
        topMargin=20 * mm, bottomMargin=18 * mm,
        leftMargin=18 * mm, rightMargin=18 * mm,
        title=f"{SCHOOL_NAME} - Fee Structure {ACADEMIC_YEAR}"
    )

    story = []
    story.append(Paragraph(SCHOOL_NAME, title_style))
    story.append(Paragraph(AFFILIATION, sub_style))
    story.append(Paragraph(CITY, sub_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.4, color=GOLD))
    story.append(Spacer(1, 10))

    story.append(Paragraph(f"Fee Structure &mdash; Academic Year {ACADEMIC_YEAR}", h2_style))

    table = Table(CLASSES, colWidths=[58 * mm, 38 * mm, 44 * mm, 38 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, MIST]),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#d9dee6")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(table)

    story.append(Paragraph("Fee Includes", h2_style))
    story.append(Paragraph("&bull; " + "<br/>&bull; ".join(INCLUDES), body_style))

    story.append(Paragraph("Charged Separately", h2_style))
    story.append(Paragraph("&bull; " + "<br/>&bull; ".join(EXCLUDES), body_style))

    story.append(Paragraph(
        "Fees are payable quarterly at the start of each term unless otherwise "
        "notified. Late payment may attract a fine as per school policy.",
        note_style
    ))
    story.append(Paragraph(
        "This is a placeholder document. TODO: Replace all \u201cTBD\u201d figures "
        "with the school office's confirmed fee amounts, then re-run "
        "scripts/generate_fee_pdf.py to regenerate this PDF.",
        note_style
    ))

    doc.build(story)
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
