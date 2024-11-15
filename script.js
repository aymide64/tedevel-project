const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener( 'click', () => {
        nav.classList.add('active');
    }
    )
    
}
if (close) {
    close.addEventListener( 'click', () => {
        nav.classList.remove('active');
    }
    )
    
}
document.getElementById("mybutton").onclick=
function() {
    window.location.href="order.html"; //replace your target page

}

document.getElementById("restuarantlead").onclick=
function() {
    window.location.href="restuarant.html"; //replace your target page

}
// script.js
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const selectedItems =
   Array.from(document.querySelectorAll('input[name="items"]:checked')).map(input => input.value);
    
    localStorage.setItem("orderItems", JSON.stringify(selectedItems));
    
    document.getElementById("submit").onclick=
    function() {
        window.location.href="payment.html"; //replace your target page
    
    }
   });
   document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith("payment.html")) {
    const orderSummary = JSON.parse(localStorage.getItem("orderItems"));
    const summaryList = document.getElementById("orderSummary");
    if (orderSummary) {
    orderSummary.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    summaryList.appendChild(listItem);
    });
    document.getElementById("confirmOrder").addEventListener("click", function() {
    const orderDetails = orderSummary.join(", ");
    localStorage.setItem("confirmedOrder", orderDetails);
    window.location.href = "confirmation.html";
    });
    }
    }
    if (window.location.pathname.endsWith("confirmation.html")) {
    const confirmedOrder = localStorage.getItem("confirmedOrder");
    document.getElementById("orderDetails").textContent = `You ordered: ${confirmedOrder}`;
    
    document.getElementById("emailProof").addEventListener("click", function() {
    alert("Your order details have been sent to your email!");
    });
    }
   });

   // image slide
   document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.slide-in');
    images.forEach(image => {
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust this value to change when the image slides in
    if (imagePosition < screenPosition) {
    image.classList.add('visible');
    }
    });
   });

