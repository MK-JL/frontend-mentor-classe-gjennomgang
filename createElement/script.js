// products array to simulate database/backend info.
let products = [
    {
        id: 1,
        name: "Laptop", // h4
        description: "Lightweight, powerful, and portable.", // p
        price: 1200, // span
    },
    {
        id: 2,
        name: "Headphones",
        description: "Noise-cancelling with crystal-clear sound.",
        price: 200,
    },
    {
        id: 3,
        name: "Coffee Mug",
        description: "Keeps your drink warm for hours.",
        price: 15,
    },
    {
        id: 4,
        name: "Keyboard",
        description: "Type stuff :)",
        price: 15,
    }
];

// Get refferance to product list from html
let productList = document.querySelector("#product-listings");

// function to add product listing to html
// "product" is a parameter, letting you pass an object into the function
function addProductToPage(product) {

    // creates li element for everything to go in
    let productListingElem = document.createElement("li");

    // Create div element to put name, and description into.
    let productInfoElem = document.createElement("div");

    // Create and add title element to product info
    let titleElement = document.createElement("h4"); // creates an h4 element (does not add it to the page)
    titleElement.textContent = product.name; // sets the content to the name of the product (passed in as a parameter)
    productInfoElem.appendChild(titleElement); // adds the h4 element to the page

    // Create and add description element to product info
    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;
    productInfoElem.appendChild(descriptionElement);

    // add product info element to the main li element
    productListingElem.appendChild(productInfoElem);

    // Create and add price listing to main li element
    let priceElem = document.createElement("span");
    priceElem.classList = "pricelisting"; // Add pricelisting class to style price
    priceElem.textContent = product.price + " NOK";
    productListingElem.appendChild(priceElem);

    // add the main li element to the (already exisitng) productList element.
    productList.appendChild(productListingElem);
}

// Loop through all the elements in "products"
for (let i = 0; i < products.length; i = i + 1) {
    // Set up the product on the page for each product
    addProductToPage(products[i]);
}