describe("Purchase", function() {
  describe("totalCost", function() {
    it("calculates total cost from the quantity and price per item", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.description = "";
      testPurchase.price = 10;
      testPurchase.quantity = 5;
      testPurchase.outputTotal = 0;
      testPurchase.totalCost();
      testPurchase.outputTotal.should.equal(50);
    })
  })
})
