let cart = JSON.parse(localStorage.getItem("cart")) || [];

let box = document.getElementById("cartItems");
let totalBox = document.getElementById("totalPrice");

function save(){
localStorage.setItem("cart",JSON.stringify(cart));
}

/* LOAD CART */
function loadCart(){

box.innerHTML = "";
let total = 0;

if(cart.length === 0){
box.innerHTML = `<div class="empty">🛒 Cart is empty</div>`;
totalBox.innerText = "";
return;
}

cart.forEach((item,index)=>{

if(!item.qty) item.qty = 1;

total += item.price * item.qty;

box.innerHTML += `
<div class="cart-item">

<div>
<h4>${item.name}</h4>
<p>Rs ${item.price}</p>
</div>

<div class="qty">
<button onclick="minus(${index})">-</button>
<span>${item.qty}</span>
<button onclick="plus(${index})">+</button>
</div>

<button class="remove" onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

totalBox.innerText = "Total: Rs " + total;

}

/* QTY */
function plus(i){
cart[i].qty++;
save();
loadCart();
}

function minus(i){
if(cart[i].qty > 1){
cart[i].qty--;
save();
loadCart();
}
}

/* REMOVE */
function removeItem(i){
cart.splice(i,1);
save();
loadCart();
}

/* WHATSAPP CHECKOUT */
function checkoutWhatsApp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(!name || !phone || !address){
alert("Fill all details");
return;
}

let msg = "🛒 *PhotoHome Order*\n\n";

let total = 0;

cart.forEach((item,i)=>{
let itemTotal = item.price * item.qty;
total += itemTotal;

msg += `${i+1}. ${item.name} x${item.qty} - Rs ${itemTotal}\n`;
});

msg += `\n💰 Total: Rs ${total}`;
msg += `\n\n👤 ${name}`;
msg += `\n📞 ${phone}`;
msg += `\n🏠 ${address}`;

let url = "https://wa.me/923338181082?text=" + encodeURIComponent(msg);

window.open(url,"_blank");

}

/* INIT */
loadCart();