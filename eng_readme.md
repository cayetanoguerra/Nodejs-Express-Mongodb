#### Master in Web Technology and Digital Business - ULPGC

# Node.JS + Express + MongoDB
Suppose that all necessary packages and modules (Node.JS, MongoDB, etc.) have already been installed. First we will create the MongoDB database. We move to the route where we have our files in the database. Once there, we create the path

```
./data/db
```

This is the default path where the files placed MongoDB.

```
$ mkdir data
$ cd data
$ mkdir db
$ CD ..
```

### Start the MongoDB server

```
$ sudo mongod --dbpath ./data/db
```
From another terminal we take a look at the newly created data base.

```
$ mongo
> db
> use myDB
switched to db myDB
```

The "use" command will create and select our database as active. Now insert
a document.

```
> db.movie.insert ({"title": "Star Wars","year":1977})
```
MongoDB responds:
```
WriteResult ({"nInserted": 1})
```
Let's see documents we have in our collection "movie".
```
> db.movie.find()
```
We will see now a little better.
```
> db.movie.find().pretty()
```
We already have a very simple database in MongoDB. We will create a website with Node.JS and Express to access it. First, we create the structure.
```
$ express myApp
$ cd myApp
```
Now let "npm" install all necessary modules.
```
$ sudo npm install --save
```
Instead of using Jade as our template engine, we will use Handlebars. Therefore, we install the module.
```
$ sudo npm install express-handlebars --save
```
We see the previous command has modified the file "package.json".
To use it we must specify Handlebars as our template engine.

Install the module for the connection to MongoDB.
```
$ sudo npm install mongodb --save
```
Download the code from: https://github.com/cayetanoguerra/nodejs-express-mongodb


### Practical tasks
1. Include one more field for inserting films. For example, the field "collection".

2. Order the list of films

3. Create a new collection in the database corresponding to "directors".

4. Create the "update" and "delete" functionality.
