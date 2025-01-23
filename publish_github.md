https://github.com/daevosDev/hape_landing

git init



git remote add origin https://github.com/daevosDev/hape_landing.git
git branch -M main
git push -u origin main


===========

CREE UN repositorie SUR GITHUB

…or create a new repository on the command line

echo "# hape_landing" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/daevosDev/hape_landing.git
git push -u origin main


…or push an existing repository from the command line

git remote add origin https://github.com/daevosDev/hape_landing.git
git branch -M main
git push -u origin main

# ====== METTRE A JOUR ========

Versionner les changements avec Git
Vercel est souvent connecté à un dépôt Git (comme GitHub, GitLab ou Bitbucket). Voici les commandes courantes pour mettre à jour les fichiers :

Vérifiez l'état des fichiers modifiés :

git status

Ajoutez les fichiers modifiés :


git add .

Ajoutez un message de commit :


git commit -m "Mise à jour des fichiers"

Poussez les changements sur le dépôt distant :


git push
