
Shape+ — Landing page (multilingual)
==================================

This package contains the ready-to-deploy landing page for Shape+ (Português / English / Español),
styled in a clear modern aesthetic. Images are mockups you can replace later in /assets.

Files included:
- index.html
- styles.css
- scripts.js
- privacy.html
- terms.html
- /assets (logo, hero svg, screenshots, badges)

How to push these files to your GitHub repo and deploy to Vercel (copy & paste commands):
--------------------------------------------------------------------------------------
# 1) Clone your empty repo (replace with your repo URL)
git clone https://github.com/jhonattang4-cpu/Shapeplus-site.git
cd Shapeplus-site

# 2) Copy the generated files into the cloned repo directory (on your machine).
#    If you downloaded the ZIP, unzip and copy files over. Example (Unix):
#    unzip /path/to/shapeplus_site_final.zip -d /tmp/shapeplus && cp -r /tmp/shapeplus/* .

# 3) Commit and push
git add --all
git commit -m "Add Shape+ landing page (initial)"
git push origin main

# 4) Quick deploy with Vercel CLI (optional but fastest):
#    - Install Vercel CLI: npm i -g vercel
#    - Login: vercel login
#    - Deploy (first time will ask a few questions): 
vercel --prod --confirm

# 5) Or connect repository to Vercel web dashboard:
#    - Login to https://vercel.com
#    - Import Project -> Choose GitHub -> Select your repo -> Deploy
#    - After the build, your site will be available at https://<project>.vercel.app
