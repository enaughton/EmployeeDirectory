
//The Fetch Call to the Random User API

fetch('https://randomuser.me/api/?nat=us&results=12')
.then(response => response.json())
.then(data => loop(data))

//The Loop Function creates 12 card elements with an Image, Employees Name, Email and Location

function loop(data){

	for(let i = 0; i < data.results.length; i++){

		const gallery = document.getElementById('gallery')
		const card = document.createElement('div')
		const image_container = document.createElement('div')
		const image = document.createElement('img')
		const card_info = document.createElement('div')
		const h3 = document.createElement('h3')
		const para = document.createElement('p')
		const p = document.createElement('p')

		para.className = 'card-text'
		para.innerHTML = `${data.results[i].email}`

		p.className = 'card-text cap'
		p.innerHTML = `${data.results[i].location.city} ${data.results[i].location.state}`

		h3.className = 'card-name cap'
		h3.innerHTML = `${data.results[i].name.first} ${data.results[i].name.last}`

		image_container.className = 'card-img-container'
		card_info.className = 'card-info-container'
		card.className = 'card'

		card.appendChild(image_container)
		image.className = 'card-img'
		image.src = `${data.results[i].picture.large}`
		image_container.appendChild(image)
		image.appendChild(card_info)
		para.appendChild(p)
		h3.appendChild(para)
		card.appendChild(h3)

		gallery.appendChild(card)
		module(data)
	}
}	

/*
The Module Function creates a Modal that will display the Image, 
Employees Full Name, Email, Location, Cell Phone Number, and a detailed location
including the street address, city, state, and Zip Code
*/


function module(data){

	const cards = document.getElementsByClassName('card')

		for(let i = 0; i < cards.length; i++){
			cards[i].addEventListener('click', () =>{
			
				const module = `<div class="modal-container">
		                <div class="modal">
		                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
		                    <div class="modal-info-container">
		                        <img class="modal-img" src= '${data.results[i].picture.large}'' alt="profile picture">
		                        <h3 id="name" class="modal-name cap"> ${data.results[i].name.first} ${data.results[i].name.last}</h3>
		      					<p class='modal-text cap'> ${data.results[i].email}
		                        <p class="modal-text cap">${data.results[i].location.city}</p>
		                        <hr>
		                        <p class="modal-text">${data.results[i].cell}</p>
		                        <p class="modal-text cap"> ${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state} ${data.results[i].location.postcode}</p>

		                    </div>
		                </div>`

	        gallery.innerHTML = module
	        loop(data)

	        const exit = document.getElementById('modal-close-btn')
	        const modal = document.getElementsByClassName('modal-container')
	        
	        	exit.addEventListener('click', () =>{

		        	modal[0].style.display = 'none'
		        	loop(data)
		        	console.log('clicky')
		        })
	    	})
		}
	}


