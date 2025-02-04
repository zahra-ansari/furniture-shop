let $ = document;

let shoppingCartIcon = $.querySelector("#shopping_cart_icon");
let shoppingList = $.querySelector("#shopping_list");
let shoppingClose = $.querySelector("#shopping_close");
let barsThreeElem = $.querySelector("#bars_three_icon");
let productsListElem = $.querySelector("#products_list");
let productsCloseElem = $.querySelector("#products_close");

shoppingCartIcon.addEventListener("click", function () {
  shoppingList.classList.toggle("hidden");
});

shoppingClose.addEventListener("click", function () {
  shoppingList.classList.toggle("hidden");
});

barsThreeElem.addEventListener("click", function()  {
  productsListElem.classList.toggle("hidden");
});

productsCloseElem.addEventListener('click', function ()  {
  productsListElem.classList.toggle('hidden')
})

