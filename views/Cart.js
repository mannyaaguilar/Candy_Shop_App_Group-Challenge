function createCartPage(){
    var hersheysQty = $("#quantityKisses").val();
    var milkyWayQty = $("#quantityMilkyWay").val();
    var reesesQty = $("#quantityPeanut").val();
    var peppermintQty = $("#quantityPeppermint").val();

    hersheysNumber = (parseFloat(hersheysQty));
    milkyWayNumber = (parseFloat(milkyWayQty));
    reesesNumber = (parseFloat(reesesQty));
    peppermintNumber = (parseFloat(peppermintQty));

    var total = hersheysNumber*1.25 + milkyWayNumber*1.25 + reesesNumber*1.25 + peppermintNumber*1.25;

    $("#quantityKisses").val("");
    $("#quantityMilkyWay").val("");
    $("#quantityPeanut").val("");
    $("#quantityPeppermint").val("");

    var newOrder = {};

    newOrder.hersheysQty = hersheysQty;
    newOrder.milkyWayQty = milkyWayQty;
    newOrder.reesesQty = reesesQty;
    newOrder.peppermintQty = peppermintQty;

    quantityArray.push(newOrder);

    $("body").empty();
    $("body").append(
        '<form>' +
            '<h1>Shopping Cart</h1>' +
            '<h2>Item ID                Qty.</h2>' +
            '<div id="candyList">' +
             '<!--this section will be changed to create columns-->' +
            "<p>\Hershey's Qty: " + quantityArray[0].hersheysQty + "</p>" + "<p>\Price:$ " + quantityArray[0].hersheysQty*1.25 + "</p>" +
        "<p>\Milky Way Qty: " + quantityArray[0].milkyWayQty + "</p>" + "<p>\Price:$ " + quantityArray[0].milkyWayQty*1.25 + "</p>" +
        "<p>\Reese's Pieces Qty: " + quantityArray[0].reesesQty + "</p>" + "<p>\Price:$ " + quantityArray[0].reesesQty*1.25 + "</p>" +
        "<p>\York Peppermint Patty Qty: " + quantityArray[0].peppermintQty + "</p>" + "<p>\Price:$ " + quantityArray[0].peppermintQty*1.25 + "</p>" +
        "<p>______________________</p>" +
        "<p>Total:$ " + total + "</p>" +
        '</div>' +
            '<p></p><p></p>' +
            '<h3>Select Payment Method</h3>' +
        '</form>' +

        '<button id="payPalBtn">PayPal</button>' +
        '<button id="creditBtn">Credit</button>' +
        '<p></p><p></p>' +
        '<button id="cartBackBtn">Back</button>');

    }

