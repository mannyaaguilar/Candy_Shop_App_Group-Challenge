function createCreditPage(){
    $("body").append(
    '<body>' +

    '<h1>Credit Card Payment</h1>' +

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

        '<button id="placeOrderBtn">Place Order</button>' +
    '<button id="creditBackBtn">Back</button>' +

        '</body>'
    )
}