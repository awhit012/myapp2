const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const title = document.getElementById('title').value;
	const content = document.getElementById('content').value
	const user = window.location.href.split('/')[4]
	postRecipe({title, content, user})
})

const postRecipe = (recipe) => {
	console.log(recipe)
	fetch(`/users/${recipe.user}/recipes`, {
	  method: 'POST', // or 'PUT'
	  headers: {
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(recipe)
	})
	.then((response) => response.json())
}
