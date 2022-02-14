// on importe les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();
// autre façon de l'écrire :
require('dotenv').config();

const express = require('express');

// on importe le router
const router = require('./app/router');

// on configure le port dans un fichier .env
const PORT = process.env.PORT || 3000;

const app = express();

// on rend nos vues avant le app.router !!IMPORTANT!!
// on précise quel moteur de rendu on veut utiliser
app.set('view engine', 'ejs');
// et on précise où se trouve nos vues
app.set('views', __dirname + '/app/views');

// on précise la position des fichiers statiques qui sont dans le dossier public
app.use(express.static(__dirname + '/public'));

// on configure le router
app.use(router);

app.use((req, res) => {
  res.status(404).render("404")
});

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
