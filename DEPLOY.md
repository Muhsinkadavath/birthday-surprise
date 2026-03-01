# How to Put Your Birthday Surprise Online (Free)

Send your girlfriend a **link** so she can open the site on her phone or laptop. Here are simple, free options.

---

## 1. Add Your Photos & Video First

- **Hero image:** Put your favourite photo of you two in `images/hero.jpg`.
- **Gallery:** Add 3 photos as `images/photo1.jpg`, `images/photo2.jpg`, `images/photo3.jpg`.
- **Collage:** Add up to 6 photos as `images/collage1.jpg` … `images/collage6.jpg` for the “Us in Pictures” polaroid collage.
- **Background (optional):** Add `images/background.jpg` for a soft full-page background.
- **Video:** Put your birthday video in `videos/birthday.mp4` (or `videos/birthday.webm`).  
  - Optional: add `images/video-poster.jpg` as the thumbnail before the video plays.

Then pick one of the options below to host the whole folder online.

---

## 2. Option A: Netlify Drop (Easiest — No Account Needed)

1. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag and drop your **entire `birthday-surprise` folder** (the one that contains `index.html`, `styles.css`, `script.js`, `images/`, `videos/`) into the page.
3. Netlify will give you a link like `https://random-name-123.netlify.app`. You can click **“Domain settings”** → **“Change site name”** to set a nicer name (e.g. `happy-birthday-march4`).
4. Send her that link.

**Note:** If you create a free Netlify account, you can change the site name and keep the link for a long time.

---

## 3. Option B: Vercel (Free, Simple)

1. Go to **[https://vercel.com](https://vercel.com)** and sign up with GitHub or email (free).
2. Install **Vercel CLI** (optional) or use the website:
   - On the site: **Add New** → **Project** → **Import** your project if it’s in GitHub, or drag your `birthday-surprise` folder if they support upload.
   - Or in terminal, from your project folder run:  
     `npx vercel`  
     and follow the steps. It will give you a link like `https://your-project.vercel.app`.
3. Send her the link.

---

## 4. Option C: GitHub + GitHub Pages (Free, Good if You Use GitHub)

1. Create a **GitHub** account if you don’t have one.
2. **Push your code** from the `birthday-surprise` folder (see **GITHUB-DEPLOY.md** for exact commands).
3. In the repo: **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** → Save.
4. Go to **Settings** → **Pages** → under “Source” choose **main** branch → **Save**.
   `https://YOUR_USERNAME.github.io/birthday-surprise/` — send her that link.

---

## 5. Option D: Cloudflare Pages (Free)

1. Go to **[https://pages.cloudflare.com](https://pages.cloudflare.com)** and sign up (free).
2. **Create a project** → **Direct Upload**.
3. Upload your **birthday-surprise** folder (zipped or as files, depending on what they ask).
4. They’ll give you a link like `https://your-project.pages.dev`.
5. Send her that link.

---

## Quick Comparison

| Option        | Ease              | Custom link name      |
|---------------|-------------------|------------------------|
| Netlify Drop  | Easiest (drag & drop) | Yes (with account) |
| Vercel        | Easy              | Yes                    |
| GitHub Pages  | Medium            | Yes (username/repo)    |
| Cloudflare    | Easy              | Yes                    |

**Recommendation:** Use **Netlify Drop** if you want the fastest way: drag the folder, get the link, optionally create an account to rename it, then send her the link on March 4th.

---

## Tips

- Test the link on your phone before sending it to her.
- Make sure `images/` and `videos/` are **inside** the folder you upload (paths in the site are `images/hero.jpg`, `videos/birthday.mp4`).
- Keep video file size reasonable (e.g. under 50–100 MB) so it loads quickly on mobile.

Happy birthday to her — she’s going to love it.
