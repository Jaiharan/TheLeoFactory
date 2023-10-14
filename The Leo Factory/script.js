
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 7.5,
    delay: 9.5,
  }
);

// Wrap your reveal function inside a DOMContentLoaded event listener to ensure it runs after the DOM is ready.
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', reveal);
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}


 /*---Product---*/

 const openShopping = document.querySelector(".shopping");
 const closeShopping = document.querySelector(".closeShopping");
 const list = document.querySelector(".list");
 const listCard = document.querySelector(".listCard");
 const total = document.querySelector(".total");
 const body = document.querySelector("body");
 const quantity = document.querySelector(".quantity");

 document.addEventListener("DOMContentLoaded", function () {

  openShopping.addEventListener("click", () => {
    body.classList.add("active1");
   });
   closeShopping.addEventListener("click", () => {
    body.classList.remove("active1");
   });
  });

 

 let products = [
    {
      id: 1,
      name: "Coco Coins (5Pcs)",
      images: "1.PNG",
      price: 250
    },
    {
      id: 2,
      name: "Copper Coin",
      images: "2.PNG",
      price: 200
    },
    {
      id: 3,
      name: "Dark Chocolate Bar",
      images: "3.PNG",
      price: 150
    },
    {
      id: 4,
      name: "White Chocolate bar",
      images: "4.PNG",
      price: 2600
    },
    {
      id: 5,
      name: "Coco powder & Seeds",
      images: "5.PNG",
      price: 500
    },
    {
      id: 6,
      name: "Cupcakes (4Pcs)",
      images: "6.PNG",
      price: 200
    },
 ]

 let listcards = [];

 const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src ="img/${value.images}.jpg">
      <div class ="title">${value.name}</div>
      <div class="price">₹ ${value.price.toLocaleString()}</div>
      <button onclick="addToCart(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
  })
 }

 initApp();



/*const addToCart = (key) => {
  if(listcards[key] == null){
    listcards[key] = JSON.parse(JSON.stringify(products[key]));
    listcards[key].quantity = 1
  }

  
  reloadCard();

}*/

const addToCart = (key) => {
  if (listcards[key] === undefined) {
    listcards[key] = { ...products[key], quantity: 1 };
  } else {
    listcards[key].quantity++;
  }
  reloadCard();
};


const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listcards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null){
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src ="img/${value.images}.jpg"></div>
        <div class="cardTitle">${value.name}</div>
        <div class="cardPrice">₹ ${value.price.toLocaleString()}</div>
        <div>
          <button style="background-color: gold"
            class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class ="count">${value.quantity}</div>
          <button style="background-color: gold"
            class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }

    
  });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

const changeQuantity = (key, newQuantity) => {
  if (newQuantity === 0) {
    delete listcards[key];
  } else {
    listcards[key].quantity = newQuantity;
    listcards[key].price = newQuantity * products[key].price;
  }
  reloadCard();
};

/*--feedback-swiper--*/

var swiper = new Swiper(".feedback-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


