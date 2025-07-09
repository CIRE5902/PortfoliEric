git checkout -b main

git push -u origin main

git checkout dev

# Estás en dev
git add .
git commit -m "feat: nueva sección"
git push

# Luego pasas a main y haces merge
git checkout main
git pull origin main
git merge dev
git add . 
git commit -m
git push
