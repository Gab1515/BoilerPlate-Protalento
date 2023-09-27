# BoilerPlate-Protalento
Mongoose + Xpress + node

# Pasos a seguir en la creacion luego de clonar un proyecto vacio
1- `npm init -y` para iniciar nuestro proyecto.
2- crear scripts en el packge.json.
3- instalar dependencias.
 a- `npm i nodemon -D`
 B- `npm install --save sequelize pg pg-hstore express cors`
4- Crear un index para conectar al iniciar scripts de npm
5- crear estructura de carpetas del proyecto (src y su contenido)
6- crear app.js y db.js dentro de carpeta /src
7- crear un archivo .gitignore en carpeta raiz y agregar node_modules
8- `git add`
9- `git commit -m "first commit"`
10- `git push`

# Pasos para iniciar proyecto clonado
1- copiar el enlace de git-hub
2- `git clone "pegar"`
3- abrirlo con visual y `npm install`
4- cambiar credenciales de pg/sequelize
5- crear un modulo
6- lo vinculan en db.js
7- lo importan en una ruta (app.js)
8- levantan el servidor `npm run dev`