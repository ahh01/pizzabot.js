document.addEventListener("DOMContentLoaded", function () {
  
  const vegetarian = "vegetarian";
  const hawaiian = "hawaiian";
  const pepperoni = "pepperoni";
  const pizzaPrice = 80;

  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); 

      const orderName = document.getElementById("pizzaType").value;
      const orderQuantity = parseInt(document.getElementById("quantity").value);

      const orderExist =
        orderName === vegetarian ||
        orderName === hawaiian ||
        orderName === pepperoni;

      if (orderExist && orderQuantity > 0) {
        const totalPrice = totalCost(orderQuantity);
        const cookTime = cookingTime(orderQuantity);
        const responseText = `Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr, the pizzas will take ${cookTime}`;

        document.getElementById("response").innerText = responseText;
      } else {
        document.getElementById("response").innerText =
          "Invalid order. Please enter valid pizza type and quantity.";
      }
    });

  function cookingTime(orderQuantity) {
    if (orderQuantity === 1 || orderQuantity === 2) {
      return "10 minutes";
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      return "15 minutes";
    } else if (orderQuantity >= 6) {
      return "20 minutes";
    }
  }

  function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
  }
});
