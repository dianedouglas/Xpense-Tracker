var Purchase = {
  description: "",
  price: 0,
  quantity: 0,
  outputTotal: 0,
  totalCost: function() {
    this.outputTotal = this.price*this.quantity;
  }
};
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var description = $("#description").val();
    var pricePI = $("#pricePI").val();
    var quantity = $("#quantity").val();
  });

});
