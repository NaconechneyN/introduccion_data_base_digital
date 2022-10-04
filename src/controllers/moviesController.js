const db = require("../database/models")
const Op = db.Sequelize.Op;

const controllers = {
    verTodos: (req, res) => {
        db.Movie.findAll({
            where:{title: {[Op.like]:"%S%"} } 
        })
            .then(function (movies) {
                res.render("moviesList", {movies})
            })
        
    }
}

module.exports = controllers;