function createCartPage(){
    $("body").append(
    '<body>' +
    '<h1>Shopping Cart</h1>' +
    '<h2>Item ID                Qty.</h2>' +
    '<div id="candyList">' +
        '<!--this section will be changed to create columns-->' +
    '<p>candy1                   13</p>' +
    '<p>candy2                   12</p>' +
    '<p>candy3                    2</p>' +
    '</div>' +
    '<p></p><p></p>' +
    '<h3>Select Payment Method</h3>' +
    '<button id="paypalBtn">Paypal</button>' +
        '<button id="creditBtn">Credit</button>' +
        '<p></p><p></p>' +
    '<button id="cartBackBtn">Back</button>' +
        '</body>'

    )
}