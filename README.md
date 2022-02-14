# Encyclopédie Pokemon

## Réalisation 

Encyclopédie recensant les créatures du célébre jeu "Pokémon".

Utilisation de PostgreSQL, mise en place d\'un utilisateur et d\'une base de données, injections SQL et requêtes préparées.

![résultat](result.webp)

## Développement

Vous souhaitez exécuter une démo local

```bash
git clone https://github.com/viktk/pokedex-viktk
npm install
npm start
url : http://localhost:8080
```

### Création d’un utilisateur et d’une base de données

- Se connecter au server PostGres dans le terminal en une seule commande
```bash
sudo -i -u postgres psql;
```

- Créer un utilisateur
```bash
CREATE ROLE nomDuLutilisateur WITH LOGIN PASSWORD 'password';
```

- Créer une base de données
```bash
CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;
```

- Vérifiez la base de donnée créée avec l'utilisateur créée
```bash
psql -U nomDeLutilisateur -d nomDeLaBase;
```

- Executer les instructions SQL contenues dans un fichier
```bash
psql -U nomDeLutilisateur -d nomDeLaBase -f chemin/du/fichier/pokedex.sql;
```