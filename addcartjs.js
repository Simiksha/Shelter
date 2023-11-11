let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let totalElement = document.querySelector('.total');
let products = [
    
    {
        id: 1,
        name: 'SOAP',
        image: src='pro1.png',
        price: 'Rs.200'
    },
    {
        id: 2,
        name: 'SHAMPOO',
        image: src= 'pro2.jpg',
        price: 'Rs.1000'
    },
    {
        id: 3,
        name: 'FOOD',
        image: src='pro3.jpg',
        price: 'Rs.550'
    },
    {
        id: 4,
        name: 'BALL TOY',
        image: src='pro4.jpg',
        price: 'Rs.100'
    },
    {
        id: 5,
        name: 'OIL',
        image: src='pro5.jpg',
        price: 'Rs.970'
    },
    {
        id: 6,
        name: 'HAIR REMOVAL',
        image: src='pro6.jpg',
        price: 'Rs.1500'
    },
	  {
        id: 7,
        name: 'FOOD',
        image: src='pro7.jpg',
        price: 'Rs.500'
    },
	 {
        id: 8,
        name: 'PEANUTBUTTER',
        image: src='pro8.jpg',
		price:'Rs.800'
    },
	 {
        id: 9,
        name: 'GRAIN',
        image: src='pro9.jpg',
		price:'Rs.650'
    },
	 {
        id: 10,
        name: 'FOOD',
        image: src='pro10.jpg',
		price:'Rs.720'
    },
	 {
        id: 11,
        name: 'CONDITIONER',
        image: src='pro11.jpg',
		price:'Rs.420'
    },
	 {
        id: 12,
        name: 'RUBBER BATH GLOVE',
        image: src='pro13.jpg',
		price:'Rs.355'
    },
	 {
        id: 13,
        name: 'DOG HARNESS',
        image: src='pro14.jpg',
		price:'Rs.250'
    },
	 {
        id: 14,
        name: 'PET VEGAN FOOD',
        image: src='pro15.jpg',
		price:'Rs.825'
    },
	 {
        id: 15,
        name: 'DROPS',
        image: src='pro16.jpg',
		price:'Rs.555'
    },
	 {
        id: 16,
        name: 'FOOD SCOOP',
        image: src='pro17.jpg',
		price:'Rs.230'
    },
	{
        id: 17,
        name: 'BEDS',
        image: src='pro18.jpg',
		price:'Rs.3400'
    },
	{
        id: 18,
        name: 'SPRAYS',
        image: src='pro19.jpg',
		price:'Rs.435'
    },
	{
        id: 19,
        name: 'CLOTHES',
        image: src='pro20.jpg',
		price:'Rs.999'
    },
	{
        id: 20,
        name: 'PARTY PACKS',
        image: src='pro21.jpg',
		price:'Rs.720'
    },
	{
        id: 21,
        name: 'COMB',
        image: src='pro22.jpg',
		price:'Rs.510'
    },
	{
        id: 22,
        name: 'CHEW STICKS',
        image: src='pro23.jpg',
		price:'Rs.150'
    },
	{
        id: 23,
        name: 'FRUITY BITES TOY',
        image: src='pro24.jpg',
		price:'Rs.890'
    },
		{
        id: 24,
        name: 'TOYS',
        image: src='pro25.jpg',
		price:'Rs.510'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    // Check if the product is already in the cart
    const productId = products[key].id;
    const productInCart = listCards.find(item => item.id === productId);

    if (productInCart) {
        alert("This product is already in your cart.");
    } 
    else {
        // Copy the product from the list to the list card
        const productCopy = JSON.parse(JSON.stringify(products[key]));
        productCopy.quantity = 1;
        listCards.push(productCopy);
        reloadCard();
    }
}


function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        // Parse the price string to a numeric value and calculate the total for each item
        const itemPrice = parseFloat(value.price.replace('Rs.', '').replace(',', '')); // Convert price to a number
        const itemTotal = itemPrice * value.quantity;
        totalPrice += itemTotal;
        count += value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${itemTotal.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    totalElement.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
  }
  reloadCard();
}

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}



function navigateToPayment() {
    if (listCards.length === 0) {
        alert("Your cart is empty. Add items to the cart before proceeding to payment.");
    } else {
        // Navigate to the payment page
        window.location.href = "payment.html";
    }
}


const myButton = document.getElementById("myButton");

// Add a click event listener to the button
myButton.addEventListener("click", navigateToPayment)