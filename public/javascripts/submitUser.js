const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const user = e.target.firstElementChild.nextSibling.nextElementSibling.value;
	postUser(user)
})

const postUser = (user) => {
	console.log(user)
	fetch('/users', {
	  method: 'POST', // or 'PUT'
	  headers: {
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({name: user, title: "boss"})
	})
	.then((response) => response.json())
}
