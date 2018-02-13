

function createPayPalPage(){
    var total = hersheysNumber*1.25 + milkyWayNumber*1.25 + reesesNumber*1.25 + peppermintNumber*1.25;
    $("body").empty();
    $("body").append(
    '<form>' +
        '<h1>' +
        'PayPal' +
        '</h1>' +
        "<p>Total:$ " + total + "</p>" +
        '</head>' +
        '<p>' +
        '<a href="https://www.paypal.com/us/signin?country.x=US&locale.x=en_US">CLICK HERE</a> To check out using PayPal as your payment method.' +
        '</p>' +
    '</form>' +

    '<button id = "paypalBackBtn">Back</button>'
    );
}