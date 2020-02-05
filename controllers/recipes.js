const Recipe = require('../models/recipe')

class RecipeController {
  async all(req, res) {
		const recipes = await Recipe.find({user: req.params.id});
		res.render('recipes', {recipes, userId: req.params.id})
	}

	new(req, res) {
		res.sendFile('newRecipe.html', { root: './public' })
	}


	async edit(req, res) {
		const recipe = await Recipe.findById(req.params.recipeId);
		res.render('editRecipe', {recipe, userId: req.params.userId})
	}

	async update(req, res) {
		console.log(req.body)
		await Recipe.findByIdAndUpdate(req.params.recipeId, {...req.body, user: req.params.id});
		res.redirect(`/users/${req.params.userId}/recipes`)
	}

	async delete(req, res) {
		console.log(req.params, "DELETE")
		await Recipe.findByIdAndDelete(req.params.recipeId)
		res.redirect(`/users/${req.params.userId}/recipes`)
	}

	async create(req, res) {
		console.log({...req.body, user: req.params.id})
		await Recipe.create({...req.body, user: req.params.id})
		console.log("CREATE")
		// put recipe in DB
		// redirect to recipes
		res.redirect(`/users/${req.params.id}/recipes`)
	}
}

module.exports = new RecipeController()