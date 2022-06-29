printf "\n>Preparando diretórios\n"

printf "\n>Instalando backend\n"
cd ./backend
npm install --prefer-dedupe

printf "\n>Voltando a raiz do projeto\n"
cd ..

printf "\n>Instalando frontend\n"
cd ./frontend
npm install --prefer-dedupe