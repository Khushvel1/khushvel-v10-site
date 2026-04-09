# Finalizing Deployment: Vercel + Cloudflare

Your strategic website code is ready and committed in `/home/khushvel/Desktop/khushvel-v10-site`. To go live, follow these steps:

## 1. Push to GitHub
If you haven't already, create a new **Public** repository on GitHub and push the code:
```bash
git remote add origin [YOUR_GITHUB_REPO_URL]
git branch -M main
git push -u origin main
```

## 2. Connect to Vercel
1.  **Sign Up/In:** Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2.  **Import Project:** Click **"Add New" > "Project"**.
3.  **Connect Repo:** Import the `khushvel-v10-site` repository.
4.  **Deploy:** Vercel will auto-detect the configuration and deploy your site to a `vercel.app` subdomain (e.g., `khushvel-v10-site.vercel.app`).

## 3. Set Up Cloudflare DNS
For "lock-in" security and performance:
1.  **Add Site:** In your Cloudflare dashboard, add your domain (e.g., `khushvelwade.com`).
2.  **Update Nameservers:** Change your domain registrar's nameservers to those provided by Cloudflare.
3.  **Connect Domain to Vercel:**
    - In Vercel, go to **Settings > Domains**.
    - Add your custom domain.
    - Copy the **CNAME** or **A Record** provided.
4.  **Add DNS Records in Cloudflare:**
    - Add the **CNAME** or **A Record** from Vercel into your Cloudflare DNS settings.
    - Ensure the "Proxy status" is set to **Proxied (Orange Cloud)** for Cloudflare security.

## 4. The Intelligence Spine (Optional)
To enable the **AI Strategist Chatbot**:
- Set up an API Key (Hugging Face or OpenAI).
- Add it to your Vercel project under **Settings > Environment Variables**.
- This will allow your `script.js` to communicate with the AI model via Vercel Functions.

---
*Your "Proof of Skill" is now live.*
