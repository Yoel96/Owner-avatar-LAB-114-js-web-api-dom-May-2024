
// Initializing the Delete buttons and getting the initial total price of the cart

newDelButton()
getTotalPrice()


//Event listeners
document.getElementById("priceBtn").addEventListener("click", function () {

  const elements = document.querySelectorAll(".cartItem .quantity input")
  const prices = document.querySelectorAll(".cartItem .cost span")
  for (let i = 0; i < elements.length; i++) {

    updatePriceByProduct(prices[i].innerText, elements[i])

  }
  getTotalPrice()

})


document.getElementById("createBtn").addEventListener("click", function () {

  const productName = document.getElementById("productName").value
  const price = document.getElementById("productPrice").value
  createNewItemRow(productName, price)

})

//Functions 

function newDelButton() {
  const buttons = document.getElementsByClassName("btn-delete")
  for (button of buttons) {
    button.addEventListener("click", function () {

      let parentItem = this.parentNode.parentNode
      deleteItem(parentItem)

    })

  }

}


function deleteItem(e) {

  e.remove()
  getTotalPrice()

}


function updatePriceByProduct(productPrice, quantity) {

  quantity.parentNode.parentNode.querySelector(".price span").innerText = parseInt(quantity.value) * parseInt(productPrice) + "€"

}

function getTotalPrice() {

  let totalPrice = 0
  const pricesinCart = document.getElementsByClassName("price")
  for (price of pricesinCart) totalPrice += parseInt(price.innerText.split("€")[0])
  document.querySelector("#totalPrice span").innerText = totalPrice + "€"

}

function createNewItemRow(productName, price) {
  const newItem = document.createElement("section")
  newItem.setAttribute("class", "cartItem")
  newItem.innerHTML = '<div class="name"><span>' + productName + '</span></div><div class="cost"><span>' + price + '</span></div><div class="quantity"><label>QTY </label><input type="number" min="1" value="1"/></div><div class="price"><span>' + price + '€</span></div><div class="delete"><button class="btn-delete btn">Delete</button></div> '
  document.getElementById("cart").appendChild(newItem)
  newDelButton()
  getTotalPrice()

}


/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/