var Purchase = {
  description: "",
  price: 0,
  quantity: 0,
  outputTotal: 0,
  totalCost: function() {
    this.outputTotal = this.price*this.quantity;
  }
};
var Category = {
  name: "",
  purchases: []
}

$(document).ready(function() {

  var currentCategory;

  $("form#purchase-form").submit(function(event) {
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

    // alert(newPurchase.outputTotal);

  });
  $("form#category-form").submit(function(event) {
    event.preventDefault();
    var categoryName = $("#newCategory").val();
    var newCategory = Object.create(Category);
    newCategory.name = categoryName;
    currentCategory = newCategory;
    $(".outputTable table").empty();
    $("#categories").show().append("<li><span>"+ categoryName +"</li></span>");



  });

});
