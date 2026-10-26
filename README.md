# Mohammed Affan Zafir — Portfolio Website

A responsive dark-mode portfolio built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — content and page sections
- `style.css` — responsive layout, colors, cards, and animations
- `script.js` — mobile navigation, current year, and email-based contact form
- `assets/Affan_Zafir_Resume.pdf` — starter resume PDF; update it with your real contact details and verified links

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. Recommended: use Visual Studio Code and its Live Server extension for a local preview.

## Personalize before publishing
1. In `index.html`, replace the generic GitHub and LinkedIn URLs with your actual profile URLs.
2. In `script.js`, replace `your-email@example.com` with the email address you want visitors to contact.
3. Check every project and certificate description. Add GitHub repository URLs, demos, certificate verification links, and exact credential titles only when verified.
4. Replace the starter resume PDF in `assets/` with your final resume PDF (keep the same filename, or update the link in `index.html`).
5. Add your photo only if you want one; the current hero uses an abstract CSS illustration.

## Publish with a custom domain (example: GitHub Pages)
1. Create/sign in to GitHub and create a repository such as `affan-portfolio`.
2. Upload the extracted files and folders to the repository root; `index.html` should be at the root.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Once GitHub Pages gives you the published URL, buy a domain from a registrar if you do not already own one.
5. In **Settings → Pages → Custom domain**, enter your domain and save.
6. At your domain registrar, add the DNS records GitHub Pages currently specifies for your chosen apex domain or `www` subdomain. Follow GitHub's official documentation for the exact current values.
7. Wait for DNS propagation, enable **Enforce HTTPS** when available, and test the site on mobile and desktop.

Alternative: deploy the folder to Vercel as a static site, then add your custom domain in Vercel project settings and follow its DNS instructions.

## Contact form note
This is a static website. The contact form opens the visitor's default email app via `mailto:`; it does not send messages through a server. For a form that submits directly on the website, connect a form provider or add a backend.

## Accuracy note
The content was prefilled from information shared in conversation. Please verify all dates, course/certificate names, and project status before publishing.
