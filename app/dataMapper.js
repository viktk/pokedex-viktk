const database = require('./database');

const dataMapper = {

  getAllPokemon: (callback) => {
    const pokemonQuery = {
      text : `SELECT * FROM "pokemon";`
    };
    database.query(pokemonQuery, callback);
  },

  getListTypePokemon: (callback) => {
    const typeListQuery = {
      text : `SELECT * FROM "type";`
    };
    database.query(typeListQuery, callback);
  },

  getPokemonByType: (id, callback) => {
    const pokemonByTypeQuery = {
      text : `
        SELECT *
        FROM type t
        JOIN pokemon_type pt
        ON t.id = pt.type_id
        JOIN pokemon p
        ON pt.pokemon_numero = p.numero
        WHERE name = $1;`,
      values: [id]
    };
    database.query(pokemonByTypeQuery, callback);
  },

  getOnePokemon: (id, callback) => {
    const pokemonQuery = {
      text : `
        SELECT *
        FROM pokemon p
        JOIN pokemon_type pt
        ON p.numero = pt.pokemon_numero
        JOIN type t
        ON pt.type_id = t.id
        WHERE numero = $1;`,
      values: [id]
    };
    database.query(pokemonQuery, callback);
  }
};

module.exports = dataMapper;