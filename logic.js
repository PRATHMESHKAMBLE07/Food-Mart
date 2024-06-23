let qty = document.getElementsByClassName("qty");
let qty_plus = document.getElementsByClassName("qty-plus");
let qty_minus = document.getElementsByClassName("qty-minus");
let prices = document.getElementsByClassName("price");

for(let i=0; i<qty.length; i++) {

    qty_plus[i].addEventListener("click", ()=>{
        qty[i].innerText++;
    });

    qty_minus[i].addEventListener("click", ()=> {
        if(qty[i].innerText > 0) {
            qty[i].innerText--;
        }
    })
}

let add_to_cart = document.getElementsByClassName("add-to-cart");

let total_food_price = 0;


for(let i=0; i<qty.length; i++) {
    add_to_cart[i].addEventListener("click", ()=>{
        total_food_price = total_food_price + (qty[i].innerText*prices[i].innerText);
    })    
}


let checkout_btn =  document.getElementsByClassName("checkout-btn");

function checkout(){
    localStorage.setItem('total', total_food_price);
    window.location.href="checkout.html";
}


window.onload = function() {
    displayTotal();
};

  
function displayTotal() {

    let total_span = document.getElementById("total-span");
    let service_span = document.getElementById("service-span");
    let delivery_span = document.getElementById('delivery-span');
    let amount_span = document.getElementById('amount-span');

    let total = parseInt(localStorage.getItem('total')); 
    // parsint mule string format madhe amount_span yenar nahi

    
    let service_charge = total/10;
    let delivery_fee = 45;

    total_span.innerText = total;
    service_span.innerText = service_charge;
    delivery_span.innerText = delivery_fee;
    amount_span.innerText = total + service_charge + delivery_fee;
}




























/*

let checkout_btn = document.getElementsByClassName("checkout-btn");
let total_price = document.getElementById("total_price");
let service_charge =  document.getElementById("service_charge");
let delivery_fee = document.getElementById("delivery_fee");
let total_amount = document.getElementById("total_amount");
let total;

checkout_btn[0].addEventListener("click", ()=>{
    total_price.innerText = total_food_price;
    service_charge.innerText = total_food_price/10;
    delivery_fee.innerText = 45;

    total = total_food_price + (total_food_price/10) + 45;

    total_amount.innerText = total;
} )


*/

