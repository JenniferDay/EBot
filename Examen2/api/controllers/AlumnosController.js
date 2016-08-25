/**
 * AlumnosController
 *
 * @description :: Server-side logic for managing alumnos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	alumnos: function (req, res) {
		Alumnos.find().exec(function(err,Alumnos){
			res.view({title:"Inicio",alumnos:Alumnos});
		});
	},
	create: function(req, res){
		var body = req.body;
		console.log(body + "aqui body");
		if (body != undefined) {
			Alumnos.create(body.Alumnos).exec(function(err,Alumnos){
				return res.redirect('/');
			});
		}else{
			return res.view();
		}
	},

};
