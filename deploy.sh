git pull;

nvm use v16.16.0;

yarn build:export;

cp out/* ../html/out/ -r; 
