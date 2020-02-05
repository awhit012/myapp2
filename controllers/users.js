const User = require('../models/user')
const path = require('path');

class UserController {
  async all(req, res) {
		const users = await User.find({});
		res.render('users', {users})
	}

	async getOne(req, res) {
		const user = await User.findById(req.params.id);
		res.render('user', {user})
	}

	async delete(req, res) {
		await User.findByIdAndDelete(req.params.id)
		res.redirect('/users')
	}

	async create(req, res) {
		console.log(req.body)
		await User.create(req.body)
		console.log("CREATE")
		// put user in DB
		// redirect to Users
		res.redirect('/users')
	}
}

module.exports = new UserController()