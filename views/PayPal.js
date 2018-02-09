function createPayPalPage(){
$("body").append(
'<h1>' +
'PayPal' +

'</h1>' +
'</head>' +
'<body>' +
'<p>' +
'<a href="https://www.paypal.com/us/signin?country.x=US&locale.x=en_US">CLICK HERE</a> To check out using PayPal as your payment method.' +
    '</p>' +

    '<form>' +

    '<button id = "paypalBackBtn">Back</button>' +

        '</form>'
)
}