function createMarketPage() {
    $("body").empty();
    $("body").append(
        '<div id="mainContainer">' +
            '<div id="header">' +
                '<h1>Sweet Success Candy Shop</h1>' +
        '</div>' +
            '<div id="content">' +
                '<div id="nav">' +
                    '<h3>Navigation</h3>' +
                    '<ul>' +
                    '<li><a class="selected" href="">Home</a></li>' +
                    '<li><a href="">About</a></li>' +
                    '<li><a href="">Contact</a></li>' +
                    '</ul>' +
                '</div>' +
                '<div id="main">' +
        '<form>' +

        '<h2>' +
        "Hershey's Kisses (Milk Chocolate)" +
        '</h2>' +
        '<div class="image">'+
        '<img src="MainPageShoppingCart/Kisses.jpg"' +
        'alt = "Picture of a Kisses"/>' +
        '</div>' +
        '<p>' +
        'This iconic, bite-size candy, has a timeless taste of milk chocolate.  It is perfect for snacking, baking, and sharing!' +
        '</p>' +
        '<ul>' +
        '<li>Service Size 2.0 oz.</li>' +
        '<li>Calories....................210</li>' +
        '<li>Sat Fat(g).....................7</li>' +
        '<li>Sugar(g).....................35</li>' +
        '<li>Sodium(mg)...............97</li>' +
        '</ul>' +
        '<input TYPE="text" id="quantityKisses" placeholder="Enter Quantity">' +
        '$1.25 each' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<h2>' +
        'Milky Way (Milk Chocolate)' +
        '</h2>' +
        '<div class="image2">' +
        '<img src="MainPageShoppingCart/MilkyWay.jpg"' +
        'alt = "Picture of a Milky Way bar"/>' +
        '</div>' +
        '<p>' +
        'The Milky Way bar is a chocolate-covered candy bar manufactured and distributed by the Mars confectionery company.' +
        '</p>' +
        '<ul>' +
        '<li>Service Size 2.0 oz.</li>' +
        '<li>Calories...................264</li>' +
        '<li>Sat Fat(g)....................7</li>' +
        '<li>Sugar(g)....................19</li>' +
        '<li>Sodium(mg)..............25</li>' +
        '</ul>' +
        '<input TYPE="text" id="quantityMilkyWay" placeholder="Enter Quantity">' +
        '$1.25 each' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<h2>' +
        "Reese's Peanut Butter Cups" +
        '</h2>' +
        '<div class="image">' +
        '<img src="MainPageShoppingCart/reeses.jpg"' +
        'alt="Picture of a Reese Peanut Butter Cup" />' +
        '</div>' +
        '<p>' +
        "Reese's Peanut Butter Cups are a popular candy consisting of a milk chocolate cup filled with peanut butter." +
        '</p>' +
        '<ul>' +
        '<li>Service Size 1.2 oz.</li>' +
        '<li>Calories...................174</li>' +
        '<li>Sat Fat(g).................3.6</li>' +
        '<li>Sugar(g)....................16</li>' +
        '<li>Sodium(mg)............122</li>' +
        '</ul>' +
        '<input TYPE="text" id="quantityPeanut" placeholder="Enter Quantity">' +
        '$1.25 each' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<h2>' +
        'York Peppermint Pattie' +
        '</h2>' +
        '<div class="image">' +
        '<img src="MainPageShoppingCart/yorkpeppermint.jpg"'+
        'alt = "Picture of a York Peppermint Patie" />'+
        '</div>' +
        '<p>' +
        'York Peppermint Pattie is a refreshing dark chocolate enrobed peppermint patty confection.' +
        '</p>' +
        '<ul>' +
        '<li>Service Size 1.5 oz </li>' +
        '<li>Calories..................165</li>' +
        '<li>Sat Fat(g)................1.9</li>' +
        '<li>Sugar(g)...................27</li>' +
        '<li>Sodium(mg).............12</li>' +
        '</ul>' +
        '<input TYPE="text" id="quantityPeppermint" placeholder="Enter Quantity">' +
        '$1.25 each' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '</form>' +

        '<button id="checkOut">Check Out</button>' +
        '<p id="cartTotalText"></p>' +
        '<div id="container"></div>' +
                '</div>' +
            '</div>' +
            '<div id="footer">' +
                'Copyright &copy; 2018 Sweet Success Candy Shop' +
            '</div>' +
        '</div>'
    );
}