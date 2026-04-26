let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS ================= */
const products = [
{name:"Mirror Frames",price:2000,imgs:["images/mirrorframes1.jpg","images/mirrorframes2.jpg"],desc:"Frame"},
{name:"LED Frame",price:2000,imgs:["images/magicmirror1.jpg","images/magicmirror2.jpg"],desc:"LED Frame"},
{name:"Couple Frame",price:2499,imgs:["images/ledframe1.jpg","images/ledframe2.jpg"],desc:"Couple Frame"},
{name:"Magic Mirror Frame",price:2000,imgs:["images/magicmirrornew1.jpg","images/magicmirrornew2.jpg"],desc:"Magic Frame"},

{name:"White Mug",price:799,imgs:["images/whitemug1.jpg","images/whitemug2.jpg"],desc:"Mug"},
{name:"Colour Mug",price:1099,imgs:["images/colourmug1.jpg","images/colourmug2.jpg"],desc:"Mug"},

{name:"White Shirt",price:799,imgs:["images/whiteshirt1.jpg","images/whiteshirt2.jpg"],desc:"Shirt"},
{name:"Colour Shirt",price:1499,imgs:["images/colourshirt1.jpg","images/colourshirt2.jpg"],desc:"Shirt"},

{name:"Cushion",price:749,imgs:["images/cushion1.jpg","images/cushion2.jpg"],desc:"Cushion"},

{name:"Chain",price:499,imgs:["images/chain1.jpg","images/chain2.jpg"],desc:"Chain"},
{name:"Ring",price:245,imgs:["images/ring1.jpg","images/ring2.jpg"],desc:"Ring"},

{name:"Keyring",price:499,imgs:["images/keyring1.jpg","images/keyring2.jpg"],desc:"Keyring"},

{name:"Album",price:999,imgs:["images/album1.jpg","images/album2.jpg"],desc:"Album"},

{name:"Lunch Box",price:699,imgs:["images/lunchbox1.jpg","images/lunchbox2.jpg"],desc:"Lunch"},

{name:"Water Bottle",price:899,imgs:["images/waterbottle1.jpg","images/waterbottle2.jpg"],desc:"Bottle"},

{name:"Badges",price:199,imgs:["images/badge1.jpg","images/badge2.jpg"],desc:"Badges"},
{name:"Pens",price:99,imgs:["images/pen1.jpg","images/pen2.jpg"],desc:"Pens"},

{name:"Flyers",price:699,imgs:["images/flyer1.jpg","images/flyer2.jpg"],desc:"Flyers"}
];

/* ================= LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {

let grid = document.getElementById("productGrid");

if (!grid) {
console.error("productGrid missing");
return;
}

grid.innerHTML = "";

products.forEach((p, i) => {

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${p.imgs[0]}" onerror="this.src='images/default.jpg'">
<h3>${p.name}</h3>
<p>Rs ${p.price}</p>
<button>Add To Cart</button>
`;

card.onclick = () => openProduct(i);

card.querySelector("button").onclick = (e) => {
e.stopPropagation();
addToCart(p.name, p.price);
};

grid.appendChild(card);
});

updateCart();

});

/* ================= FUNCTIONS ================= */

function openProduct(id){
localStorage.setItem("product",id);
window.location.href="product.html";
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
}

function updateCart(){
let c = JSON.parse(localStorage.getItem("cart")) || [];
let el = document.getElementById("cartCount");
if(el) el.innerText = c.length;
}

function openContact(){
document.getElementById("contactBox").style.display="flex";
}

function closeContact(){
document.getElementById("contactBox").style.display="none";
}