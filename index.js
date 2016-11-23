var cart = {};
var price;

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

function addToCart(item) {
  price = Math.floor(Math.random() * 10);
  //cart[item] = price;
  cart.push( {item, price} );
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getCart() {
  return cart;
}

function viewCart() {

  if (Object.getOwnPropertyNames(cart).length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  } else {
    var newList = "In your cart you have ";
    for (var item in cart) {
      newList += `${item} at $${cart[item]}, `
    }
    console.log(newList);
    return;
  }
}
