function payWithPaystack(){

let amount = document.getElementById("amount").value

if(amount <= 0){

alert("Enter valid amount")
return

}

let handler = PaystackPop.setup({

key: "YOUR_PAYSTACK_PUBLIC_KEY",

email: "customer@email.com",

amount: amount * 100,

currency: "GHS",

callback: function(response){

alert("Payment successful!")

},

onClose: function(){

alert("Transaction cancelled")

}

})

handler.openIframe()

}
