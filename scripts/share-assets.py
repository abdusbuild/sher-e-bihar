# Regenerates the link-preview cards (public/og/*.jpg) and every site icon.
# Run after changing a photo or the logo:  python scripts/share-assets.py   (needs: pip install pillow fonttools)
# WhatsApp and Facebook cache previews by image URL, so give a changed card a new file name in OG_CARDS and app/data/seo.js.
import os
from PIL import Image, ImageDraw, ImageFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = os.path.join(ROOT, "scripts", "fonts", "JosefinSans.ttf")  # SIL Open Font License, same face as the site
NAVY = (33, 21, 81)
NAVY_DARK = (21, 13, 56)
SILVER = (211, 208, 220)
WHITE = (255, 255, 255)
CARD = (1200, 630)
NAME = "Hotel Sher-e-Bihar"
MARK = "SB"

# file: (photo in public/images, crop left, crop top, crop width in the photo's pixels, caption)
# Always the real published photos. WhatsApp can crop a preview to its centre square, so the subject and text sit mid-frame.
OG_CARDS = {
    "home": ("exterior-dusk", 0, 0, 1240, "Hotel, Restaurant & Banquet · Sherghati, Gaya"),
    "rooms": ("room-double-2", 0, 18, 1280, "AC, Standard & Family Rooms"),
    "banquet": ("banquet-hall-3", 84, 0, 1042, "Wedding & Banquet Hall"),
    "dining": ("restaurant-hall", 0, 100, 1280, "Restaurant on GT Road"),
    "about": ("exterior-day", 0, 60, 714, "A Family-Run Hotel in Sherghati"),
    "contact": ("exterior-dusk", 640, 470, 960, "Contact & Directions · NH-19, Sherghati"),
    "gallery": ("banquet-stage-heart", 0, 60, 1280, "Photo Gallery"),
}


def font(size, weight):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([weight])
    return f


def og_card(file, source, left, top, width, caption):
    height = round(width * CARD[1] / CARD[0])
    img = Image.open(os.path.join(ROOT, "public", "images", f"{source}.jpg")).convert("RGB")
    if left + width > img.width or top + height > img.height:
        raise ValueError(f"{file}: crop runs outside {source} ({img.size})")
    card = img.crop((left, top, left + width, top + height)).resize(CARD, Image.LANCZOS)

    # Dark fade behind the text so it stays readable over any photo.
    fade = Image.new("L", (1, CARD[1]), 0)
    start = 360
    for y in range(start, CARD[1]):
        fade.putpixel((0, y), round(235 * min(1, (y - start) / 140)))
    card.paste(Image.new("RGB", CARD, NAVY_DARK), mask=fade.resize(CARD))

    draw = ImageDraw.Draw(card)
    draw.text((CARD[0] / 2, 546), NAME, font=font(60, 700), fill=WHITE, anchor="ms")
    size = 30
    while font(size, 500).getlength(caption) > 610:  # keep inside the centre square
        size -= 1
    draw.text((CARD[0] / 2, 592), caption, font=font(size, 500), fill=SILVER, anchor="ms")

    out = os.path.join(ROOT, "public", "og", f"{file}.jpg")
    card.save(out, "JPEG", quality=84, optimize=True, subsampling="4:2:0")
    print(f"{out}: {os.path.getsize(out) // 1024} KB")


def icon(px, radius=0.0, mark_width=0.68):
    """The SB mark, white on navy, drawn large then scaled down for crisp edges."""
    s = 1024
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((0, 0, s - 1, s - 1), round(radius * s), fill=NAVY + (255,))
    f = font(100, 700)
    f = font(round(100 * mark_width * s / f.getlength(MARK)), 700)
    x0, y0, x1, y1 = f.getbbox(MARK)
    draw.text(((s - (x1 - x0)) / 2 - x0, (s - (y1 - y0)) / 2 - y0), MARK, font=f, fill=WHITE)
    return img.resize((px, px), Image.LANCZOS)


def save_opaque(img, *path):
    # iOS shows transparency as black, so app icons are flattened and full-bleed.
    out = os.path.join(ROOT, *path)
    img.convert("RGB").save(out, "PNG", optimize=True)
    print(f"{out}: {os.path.getsize(out) // 1024} KB")


def svg_icon():
    # The letters are saved as outlines so the icon looks the same with no font installed.
    tt = instantiateVariableFont(TTFont(FONT), {"wght": 700})
    glyphs, cmap = tt.getGlyphSet(), tt.getBestCmap()
    advance, outlines = 0, []
    for ch in MARK:
        outlines.append((glyphs[cmap[ord(ch)]], advance))
        advance += glyphs[cmap[ord(ch)]].width

    bounds = BoundsPen(glyphs)
    for glyph, x in outlines:
        glyph.draw(TransformPen(bounds, (1, 0, 0, 1, x, 0)))
    x0, y0, x1, y1 = bounds.bounds
    scale = 68 / (x1 - x0)
    dx = 50 - scale * (x0 + x1) / 2
    dy = 50 + scale * (y0 + y1) / 2

    pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    for glyph, x in outlines:
        glyph.draw(TransformPen(pen, (scale, 0, 0, -scale, dx + scale * x, dy)))
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
        f'<rect width="100" height="100" rx="14" fill="#211551"/><path fill="#fff" d="{pen.getCommands()}"/></svg>\n'
    )
    with open(os.path.join(ROOT, "app", "icon.svg"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write(svg)


os.makedirs(os.path.join(ROOT, "public", "og"), exist_ok=True)
os.makedirs(os.path.join(ROOT, "public", "icons"), exist_ok=True)
for name, spec in OG_CARDS.items():
    og_card(name, *spec)

svg_icon()
icon(256, radius=0.14, mark_width=0.76).save(
    os.path.join(ROOT, "app", "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)]
)
save_opaque(icon(180), "public", "apple-touch-icon.png")
save_opaque(icon(192), "public", "icons", "icon-192.png")
save_opaque(icon(512), "public", "icons", "icon-512.png")
# Android may mask icons into a circle: keep the letters inside the central safe zone.
save_opaque(icon(512, mark_width=0.5), "public", "icons", "icon-maskable-512.png")
