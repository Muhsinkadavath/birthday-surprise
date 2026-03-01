# Birthday Surprise 💕

A one-page surprise site for someone special (birthday March 4th).

## What’s in it

- **Hero** – “Happy Birthday” + one main photo (you add it).
- **Why I love you** – Short, sweet (and a bit funny) reasons.
- **Our moments** – Grid of 3 photos (you add them).
- **Video** – One birthday video (you add it).
- **Pick-up lines** – Cheesy but sincere lines.
- **Will you be with me forever?** – Yes / No. The **No** button runs away when she tries to click it.
- **Will you marry me?** – Same trick: **No** keeps moving so she has to pick **Yes**.
- **About gifts** – A note that you’re not giving a physical gift this year (her choice + budget), but that you’re ready to give her anything when she says yes — with pictures of what you wish you could give (jewellery, dress, chocolates, flowers) and “Please let me give you something.”
- **Closing** – A short “thank you” and “I love you”.

## What you need to do

1. **Add your media**
   - `images/hero.jpg` – Favourite photo of you two (hero section).
   - `images/photo1.jpg`, `photo2.jpg`, `photo3.jpg` – Gallery.
   - `images/collage1.jpg` … `images/collage6.jpg` – Photos for the “Us in Pictures” collage (polaroid-style).
   - `images/background.jpg` – Optional: one of your photos as a soft full-page background.
   - Gift section: `images/gift-jewellery.jpg`, `gift-dress.jpg`, `gift-chocolates.jpg`, `gift-flowers.jpg` – What you wish you could give her (or leave the default emoji placeholders). **`images/gift-me.jpg`** – Your photo (surprise: only shows when she clicks “Tap for one more surprise”).
   - `videos/birthday.mp4` – Your birthday video.
   - Optional: `images/video-poster.jpg` – Thumbnail for the video.

2. **Optional edits**
   - In `index.html` you can change “Happy Birthday, Love” to her name (e.g. “Happy Birthday, [Name]”).
   - Edit the “Why you’re my favourite” cards and the pick-up lines to match your style.

3. **Put it online**
   - See **DEPLOY.md** for step-by-step free hosting (Netlify, Vercel, GitHub Pages, Cloudflare).
   - Send her the link on March 4th.

## Run locally

Open `index.html` in a browser, or from the project folder run:

```bash
# If you have Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

Or use XAMPP: put this folder in `htdocs` and open `http://localhost/personal/birthday-surprise/`.
