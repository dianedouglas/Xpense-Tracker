var Purchase = {
  description: "",
  price: 0,
  quantity: 0,
  outputTotal: 0,
  totalCost: function() {
    this.outputTotal = this.price*this.quantity;
  }
};
// var testPurchase = Object.create(Purchase);
// testPurchase.description;
// testPurchase.price;
// testPurchase.quantity;
// testPurchase.outputTotal;
// testPurchase.totalCost;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var description = $("#description").val();
    var pricePI = $("#pricePI").val();
    var quantity = $("#quantity").val();

    var newPurchase = Object.create(Purchase);
    newPurchase.description = description;
    newPurchase.price = pricePI;
    newPurchase.quantity = quantity;
    newPurchase.totalCost();
    $(".outputTable table tbody").append(
              "<tr>" +
                "<td>" + newPurchase.description + "</td>" +
                "<td>" + newPurchase.price + "</td>" +
                "<td>" + newPurchase.quantity + "</td>" +
                "<td>" + newPurchase.outputTotal + "</td>" +
              "</tr>" );

    alert(newPurchase.outputTotal);

  });

});
