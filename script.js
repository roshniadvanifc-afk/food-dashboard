let cart = [];
let total = 0;

function addToCart(name, price){
  cart.push({name, price});
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("total").innerText = total;

  let li = document.createElement("li");
  li.innerText = name + " - Rs " + price;
  document.getElementById("cart-items").appendChild(li);
}