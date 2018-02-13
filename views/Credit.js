function createCreditPage(){
    var total = hersheysNumber*1.25 + milkyWayNumber*1.25 + reesesNumber*1.25 + peppermintNumber*1.25;
    $("body").empty();
    $("body").append(
        '<form>' +
            '<h1>Credit Card Payment</h1>' +
            "<p>Total:$ " + total + "</p>" +
            '<h2>Billing Information</h2>' +
             '<form>' +
             '<input type="text" id="billName" placeholder="Name">' +
            '<input type="text" id="billAdd" placeholder="Address">' +
            '<input type="text" id="billCity" placeholder="City">' +
            '<input type="text" id="billSt" placeholder="State">' +
            '<input type="number" id="billZip" placeholder="Zip">' +

            '</form>' +

            '<h2>Shipping Information</h2>' +
            '<form>' +
            '<input type="text" id="shipName" placeholder="Name">' +
            '<input type="text" id="shipAddress" placeholder="Address">' +
            '<input type="text" id="shipCity" placeholder="City">' +
            '<input type="text" id="shipSt" placeholder="State">' +
            '<input type="number" id="shipZip" placeholder="Zip">' +
            '</form>' +

        '</form>' +

        '<button id="placeOrderBtn">Place Order</button>' +
        '<button id="creditBackBtn">Back</button>'
    );
}