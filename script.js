var sumOfToppings = 0;

var addToppings = function() {
  sumOfToppings += parseInt($(this).val());
  return sumOfToppings;
}

var checkSize = function (size) {
  if (size === 13) {
    sumOfToppings = 1.5 * sumOfToppings
  } else if (size === 11) {
    sumOfToppings = 1.25 * sumOfToppings
  } else {
    sumOfToppings = sumOfToppings
  }
  return sumOfToppings
}

function Pizza (crust, size, toppings) {
  this.pizzaCrust = crust;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.getPrice = function () {
  return this.pizzaCrust + this.pizzaSize + this.pizzaToppings;
}

// UI Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var inputCrust = parseInt($("select#pizza-crust").val());
    var inputSize = parseInt($("select#pizza-size").val());
    $("input:checkbox[name=pizza-toppings]:checked").each(addToppings);
    var inputToppings = checkSize(inputSize);

    var newPizza = new Pizza(inputCrust, inputSize, inputToppings);

    var price = (newPizza.getPrice()).toFixed(2);

    $("span#crust-price").text(inputCrust.toFixed(2));
    $("span#size-price").text(inputSize.toFixed(2));
    $("span#toppings-price").text(inputToppings.toFixed(2));
    $("span#total").text(price);

    $(".pizza-summary").show();
    $("form#pizza-form").hide();
  });
});
