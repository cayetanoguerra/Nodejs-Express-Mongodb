#### Máster en Tecnología Web y Negocio Digital - ULPGC
# Node.JS + Express + MongoDB

Supongamos que ya hemos instalado todos los paquetes y módulos (Node.JS, MongoDB, etc.)
necesarios. En primer lugar vamos a crear la base de datos en MongoDB. Nos movemos a la ruta
donde queremos tener nuestros archivos de la base de datos. Una vez allí, creamos el path ./data/
db. Esta será la ruta predeterminada donde MongoDB colocará los archivos.

```
$ mkdir data
$ cd data
$ mkdir db
$ cd ..
```
Arrancamos el servidor MongoDB
```
$ sudo mongod --dbpath ./data/db
```
Desde otra terminal echamos un vistazo a la base de datos recién creada.
```
$ mongo
> db
```
Debe responder:
```
test
```
“test” es la base de datos por defecto. Crearemos la nuestra.
```
> use myDB
switched to db myDB
```
El comando “use” creará y seleccionará nuestra base de datos como la activa. Ahora insertamos
un documento.
```
> db.movie.insert({"title":"La guerra de las galaxias”,"year":1977})
```
MongoDB nos debe responder:
```
WriteResult({ "nInserted" : 1 })
```
Vamos a ver todos los documentos que tenemos en nuestra colección “movie”.
```
> db.movie.find()
```
Lo veremos ahora un poco mejor.
```
> db.movie.find().pretty()
```
Ya tenemos una base de datos muy simple en MongoDB. Vamos a crear una web en Node.JS y
Express para acceder a ella. Primero, creamos la estructura.
```
$ express myApp
$ cd myApp
```
Ahora dejamos que “npm” instale todos los módulos necesarios.
```
$ sudo npm install --save
```
En lugar de utilizar “Jade” como gestor de plantillas por defecto, vamos a utilizar “Handlebar”. Por
tanto, instalamos el módulo.
```
$ sudo npm install express-handlebars —-save
```
Vemos cómo el comando anterior ha modificado el fichero “package.json”.

Para usarlo debemos establecer “Handlebar” como gestor de plantillas dentro de la aplicación.
Instalamos el módulo para la conexión con mongoDB.
```
$ sudo npm install mongodb --save
```
Descarga el código desde: https://github.com/cayetanoguerra/nodejs-express-mongodb

### Tareas prácticas

1. Incluye un campo más en la inserción de películas. Introduce, por ejemplo, el campo
“recaudación”.

2. Ordena el listado de películas por recaudación, de más a menos taquillera.

3. Crea una nueva colección en la base de datos correspondiente a “directores”.

4. Crea la opción “actualizar” y “borrar” en la web.


