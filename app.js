var quantityArray = [];

$(document).ready(function(){
init();
});

function init(){
createMarketPage();
    enable();
}

function enable() {
    $("#checkOut").on("click", function () {
        createCartPage();
        enable();
    });

    $("#cartBackBtn").on("click", function () {
        createMarketPage();
        enable();
    });

    $("#payPalBtn").on("click", function () {
        createPayPalPage();
        enable();
    });

    $("#creditBtn").on("click", function(){
        createCreditPage();
        enable();
    });

    $("#paypalBackBtn").on("click", function () {
        createCartPage();
        enable();
    });

    $("#placeOrderBtn").on("click", function () {
        createConfirmationPage();
        enable();
    });

    $("#creditBackBtn").on("click", function () {
        createCartPage();
        enable();
    });

    // $("#returnToShopping").on("click", '.returnToShopping', function() {
    //     createMarketPage();
    //     enable();})



}