function createConfirmationPage(){
    var total = hersheysNumber*1.25 + milkyWayNumber*1.25 + reesesNumber*1.25 + peppermintNumber*1.25;
    $("body").empty();
    $("body").append(
    '<h1>'+
    'Receipt Confirmation'+
    "<p>Total:$ " + total + "</p>" +
    '</h1>'+
    '</head>'+
    '<body>'+
    '<Div>'+
    '<a href="https://www.nerdery.com/nerds/scott-bromander">Click HERE to Print Receipt Now</a>'+
    '</Div>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<Div>'+
    '<a href="https://www.nerdery.com/nerds/scott-bromander">Click HERE to Receive Email Receipt</a>'+
    '</Div>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<Div>'+
    '<a href="https://www.nerdery.com/nerds/scott-bromander">Click HERE to Return to Shopping</a>'+
    '</Div>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<p></p>'+
    '<p>'+
    '<a href="https://www.nerdery.com/nerds/scott-bromander">Click HERE to Exit</a>'+
    '</p>'+
    '</body>'
    );
}