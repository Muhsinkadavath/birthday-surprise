# Deploy Birthday Surprise on GitHub (Git + GitHub Pages)

Your project is already a Git repo with an initial commit. Follow these steps to push it to GitHub and turn on GitHub Pages so the site is live.

---

## Step 1: Create the repo on GitHub

1. Go to **[github.com](https://github.com)** and sign in (create an account if needed).
2. Click **"New repository"** (green button).
3. Set **Repository name** to `birthday-surprise` (or any name you like).
4. Choose **Public**. Leave **"Add a README"** unchecked (you already have one).
5. Click **"Create repository"**.

---

## Step 2: Push your code

Open a terminal in the `birthday-surprise` folder and run (replace **YOUR_USERNAME** with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git
git branch -M main
git push -u origin main
```

- **If Git asks for credentials:** GitHub no longer accepts account passwords for push. Use a **Personal Access Token**:
  1. On GitHub: **Settings** (your profile) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
  2. **Generate new token** → give it a name, check **repo**, generate.
  3. Copy the token and use it as the **password** when `git push` asks for credentials (username = your GitHub username).

---

## Step 3: Turn on GitHub Pages

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **"Build and deployment"** → **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select **main** and **/ (root)** → **Save**.
4. Wait 1–2 minutes. Your site will be at:

   **`https://YOUR_USERNAME.github.io/birthday-surprise/`**

Send her that link.

---

## Later: update the site

After you change files locally, push again:

```bash
git add .
git commit -m "Update message"
git push
```

GitHub Pages will update the site automatically after each push.
