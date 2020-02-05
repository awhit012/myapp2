var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users');
const RecipeController = require('../controllers/recipes');

/* GET users listing. */
router.get('/', UserController.all);
router.get('/:id', UserController.getOne);
router.get('/:id/delete', UserController.delete);

router.post('/', UserController.create);

router.get('/:id/recipes', RecipeController.all)
router.get('/:id/newRecipe', RecipeController.new)
router.post('/:id/recipes', RecipeController.create)
router.get('/:userId/recipes/:recipeId/delete', RecipeController.delete)
router.get('/:userId/recipes/:recipeId/edit', RecipeController.edit)
router.post('/:userId/recipes/:recipeId', RecipeController.update)


module.exports = router;
