# Hotel Sher-e-Bihar — Website

Next.js website for Hotel Sher-e-Bihar, GT Road, Akauna, Sherghati (Gaya, Bihar).

## Run locally
```
npm install
npm run dev      # http://localhost:3000
```

## Pages
| URL | File |
|---|---|
| `/` Home | `app/page.js` |
| `/about` | `app/about/page.js` |
| `/rooms` | `app/rooms/page.js` |
| `/dining` | `app/dining/page.js` |
| `/banquet` | `app/banquet/page.js` |
| `/gallery` | `app/gallery/page.js` |
| `/faq` | `app/faq/page.js` |
| `/contact` | `app/contact/page.js` |
| `/privacy`, `/terms` | `app/privacy`, `app/terms` |

Navbar, footer, loader, Enquire button and booking popup are shared in `app/layout.js`.

## Edit content
All text, phone numbers, rooms, prices, menu, gallery and reviews live in **`app/data/site.js`**.
Search that file for `TODO` to find details that still need confirming with the owner.

## Add photos
1. Put images in `public/images/` (e.g. `room-deluxe.jpg`). Landscape 3:2 photos work best.
2. In `app/data/site.js`: fill a room's `images` (3 photos: main + 2 small), set `restaurant.image` (replaces the thali illustration), add entries to `photos` (gallery + scrolling strips, with a `cat` for the gallery filter) or `heroImages` (home slideshow).
3. Run `python scripts/image-meta.py` (needs Pillow: `pip install pillow`). It records each photo's size and blur preview in `app/data/images.js` so Next.js can serve it resized as AVIF/WebP. Photos missing from that file still show, just without the optimisation.

## Deploy to Vercel
Push this folder to GitHub, import it at vercel.com, and click Deploy (no settings needed).
