# The Emily Bardswell Story — bardswell.com

A static website telling the story of Emily Bardswell, her 1898 novel *Played On*,
and the quest to reunite her collection of autographed cricket bats.

No build step, no framework, no dependencies — just plain HTML, CSS and
JavaScript. This makes it simple to deploy and very unlikely to break.

## What's in this folder

```
index.html          Home page
lot-1651.html        "Lot 1651"
the-books.html       "The Books"
the-bats.html        "The Bats"
the-quest.html        "The Quest"
collection.html      Full card gallery (44 cricketer trading cards)
contact.html          Contact form
css/style.css         All styling
js/main.js            Video modal, card lightbox, contact form submission
images/               Header banner, page images, card images, the video
```

## 1. Before you go live: get a Web3Forms key (2 minutes, free)

The contact form on `contact.html` uses [Web3Forms](https://web3forms.com) to
email you submissions without needing any server code.

1. Go to **https://web3forms.com**
2. Enter the email address you want submissions sent to (e.g.
   `neal@bardswell.com`) and click **Create Access Key**.
3. Check that inbox for a confirmation email and click the link in it.
4. Copy the access key you're given (a long string of letters and numbers).
5. Open `contact.html` in a text editor, find this line near the top of the
   form:

   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
   ```

   and replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with the key you copied.
6. Save the file.

That's the only thing you need to edit before deploying. Do this now, before
Step 2, so it's part of your first commit.

## 2. Push this folder to GitHub

Open a terminal (Command Prompt / PowerShell / Terminal), `cd` into this
folder, then run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/NealWhittle/bardswell-website.git
git push -u origin main
```

If `https://github.com/NealWhittle/bardswell-website` doesn't exist yet:

1. Go to **https://github.com/new**
2. Repository name: `bardswell-website`
3. Leave it **empty** (don't add a README, .gitignore, or license — this
   folder already has everything)
4. Click **Create repository**, then run the commands above.

If `git` isn't installed, get it from **https://git-scm.com/downloads** first.

## 3. Connect Cloudflare Pages to the repo

1. Log into your Cloudflare dashboard: **https://dash.cloudflare.com**
2. In the sidebar, go to **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
3. Authorize Cloudflare to access your GitHub account if prompted, then
   select the **bardswell-website** repository.
4. On the build settings screen:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (just a single forward slash — the root
     of the repo)
5. Click **Save and Deploy**. The first deploy takes about a minute.

You'll get a temporary URL like `bardswell-website.pages.dev` — check the
site works there first.

## 4. Point bardswell.com at it

Since your domain is already on Cloudflare:

1. In your new Pages project, go to **Custom domains** → **Set up a custom
   domain**.
2. Enter `bardswell.com` (and add `www.bardswell.com` too if you want both).
3. Cloudflare will offer to create the DNS records automatically since the
   domain is already in your account — accept it.
4. Give it a few minutes for DNS/SSL to activate, then visit
   **https://bardswell.com**.

From then on, every time you `git push` to the `main` branch, Cloudflare
Pages automatically rebuilds and redeploys the site within a minute or so.

## Making changes later

Everything is plain HTML/CSS, so you (or I, in a future session) can edit
any `.html` file directly, or add new images to `images/content/` or
`images/cards/`. After editing, just:

```bash
git add .
git commit -m "Describe your change"
git push
```

and Cloudflare Pages picks it up automatically.

## Notes on the content

- All text on the site was reproduced exactly as it appeared in your
  "Website Info" document. Two likely typos were carried over faithfully
  from that source rather than silently corrected:
  - "unlike the reprint from !979" (The Quest page) — probably meant "1979"
  - "Finally and moste importantly" (The Books page) — probably meant "most"
  Let me know if you'd like these fixed, or anything else adjusted.
- The video was compressed from 33MB to 13MB so it stays under Cloudflare
  Pages' 25MB-per-file limit. Quality should still look good, but let me
  know if you'd like it re-encoded at a different quality/size trade-off.
