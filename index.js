var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  } else {
    var cartString = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        cartString += `${[item]} at $${cart[i][item]}`;
        if (i == cart.length - 1) {
         cartString += ".";
        } else {
          cartString += ", ";
        }
      }
    }
    console.log(cartString);
    return;

  }
}

function removeFromCart(item) {
  if false {

  } else {
    delete cart[item];
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
