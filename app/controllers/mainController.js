const dataMapper = require('../dataMapper');

const mainController = {
    // méthode pour la page d'accueil
    homePage: (request, response) => {
        dataMapper.getAllPokemon( (error, results) => {
            if(error) {
                response.render('404');
            } else {
                response.render('home', {
                    pokemon: results.rows
                })
            }
        });
    },

    // méthode pour la page liste des types de pokemon
    listTypePage: (request, response) => {
        dataMapper.getListTypePokemon( (error, results) => {
            if(error) {
                response.render('404');
            } else {
                response.render('list-type-pokemon', {
                    type: results.rows
                })
            }
        });
    },

    // méthode pour la page liste des pokemon par type
    typePokemonPage: (request, response) => {
        const pokemonType = request.params.name;

        dataMapper.getPokemonByType(pokemonType, (error, results) => {
            if(error) {
                response.render('404');
            } else {
                response.render('pokemon-by-type', {
                    types: results.rows
                })
            }
        });
    },

    // méthode pour la page détail
    detailPage: (request, response) => {
        const pokemonId = Number(request.params.id);

        dataMapper.getOnePokemon(pokemonId, (error, result) => {
            const detail = result.rows[0];
                delete detail.type_id;
                delete detail.name;
                delete detail.color;

            const typeList = [];
            for (const type of result.rows) {
                typeList.push({
                    id: type.type_id,
                    name: type.name,
                    color: type.color,
                })
            };
            detail.types = typeList;
            
            if(error) {
                response.render('404');
            } else {
                response.render('detail-pokemon', {
                    // detailPokemon: results.rows
                    detail,
                    typeList
                })
            }
        });
        
    }
};
  
module.exports = mainController;
  