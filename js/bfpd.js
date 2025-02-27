
//product 
let products = [];

// Create the createCard Function
const createCard = (product) => {
    // Create the product card container
    const card = document.createElement('div');
    card.classList.add('productcard', 'bg-white', 'inline-block', 'rounded-2xl','ml-4','mt-4', 'overflow-hidden' );

      // Create the image element
    const img = document.createElement('img');
    img.classList.add('h-[150px]', 'w-[200px]', 'object-cover', 'rounded-2xl', 'hover:scale-110', 'transition-transform', 'duration-300');
    img.src = product.thumbnail;
    img.alt = 'Product Picture';

      // Create the product bottom sheet container
    const productBottomSheet = document.createElement('div');
    productBottomSheet.classList.add('productButtomSheet', 'p-3');

      // Create the product info container
    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('productInfoContainer');

      // Create the product name element
    const productName = document.createElement('div');
    productName.classList.add('productName', 'text-black');
    productName.textContent = product.title;

      // Create the product price element
    const productPrice = document.createElement('div');
    productPrice.classList.add('productPrice', 'text-black');
    productPrice.textContent = product.price + " Bath ";

      // Append the name and price to the product info container
    productInfoContainer.appendChild(productName);
    productInfoContainer.appendChild(productPrice);

      // Create the "Add to Cart" button
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('addToCart', 'bg-gray-700', 'hover:bg-gray-400', 'px-2', 'pt-1', 'rounded-[4px]', );
    addToCartButton.textContent = 'Add to Fav';

      // Append the product info container and the button to the bottom sheet
    productBottomSheet.appendChild(productInfoContainer);
    productBottomSheet.appendChild(addToCartButton);

      // Append the image and bottom sheet to the card
    card.appendChild(img);
    card.appendChild(productBottomSheet);

      // Append the card to the container on the page
    const container = document.getElementById('product-container');
    if (container) {
        container.appendChild(card); // Only append if the container exists
    } else {
        console.error('Product container not found!');
    }
    };

//For Test Generate CreateCard
/*    for (let i = 1; i <= 10; i++) {
        createCard({
        name: `Iphone ${i}`,
        price: `${20 + i},000`,
        imageUrl: `https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952k05o7bhje0aku1kd97pwr7x0jz9gad0z5kr9tf34&ep=v1_gifs_search&rid=200w.gif&ct=g`
        });
    }
*/

//fetch api Product: from dummy Jason
const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productResponse) => {
        products = productResponse.products;

        products.forEach(products => {
            createCard(products);
        });
        console.log(products) /*For Check at console.log*/;
    });
}

//call API function
fetchProduct();

