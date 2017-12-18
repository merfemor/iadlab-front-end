ng build --deploy-url /~s225111/
scp -r -P 2222 dist/* s225111@se.ifmo.ru:~/public_html