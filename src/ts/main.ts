import "./../scss/style.scss";
import { Product } from "./models/Product";

const products = [
  new Product(
    "Kungsgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Medium",
    499,
    "Text om gran 1",
    "001"
  ),
  new Product(
    "Rödgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Medium",
    350,
    "Text om gran 2",
    "002"
  ),
  new Product(
    "Kungsgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Stor",
    699,
    "Text om gran 3",
    "003"
  ),
  new Product(
    "Kungsgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Liten",
    350,
    "Text om gran 4",
    "004"
  ),
  new Product(
    "Rödgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Liten",
    250,
    "Text om gran 5",
    "005"
  ),
  new Product(
    "Rödgran",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU",
    "Stor",
    390,
    "Text om gran 6",
    "006"
  ),
];

//-------
const cart: Product[] = [];
//-----

console.log(products);
let currentProduct: Product;
const createProductsHtml = () => {
  for (let i = 0; i < products.length; i++) {
    const productContainer = document.createElement("div");
    const productTitle = document.createElement("h2");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("p");
    const productID = document.createElement("p");
    const productSize = document.createElement("p");
    const addToCartButton = document.createElement("button");

    productTitle.innerHTML = products[i].title;
    productImage.innerHTML = products[i].imageUrl;
    productSize.innerHTML = products[i].size;
    productPrice.innerHTML = products[i].price.toString();
    productImage.setAttribute("src", products[i].imageUrl);
    productID.innerHTML = "Art.nr: " + products[i].id;
    addToCartButton.innerHTML = "Lägg i varukorg";

    productContainer.classList.add("main-wrapper__products__product-card");

    productContainer.appendChild(productTitle);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productSize);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(addToCartButton);
    document
      .querySelector(".main-wrapper__products")
      ?.appendChild(productContainer);

    //-----
    addToCartButton.addEventListener("click", () => {
      cart.push(products[i]);
      console.log(cart);
      cartHtml();
      cartHtmlForCheckout();
    });
    //-----

    productContainer.addEventListener("click", () => {
      const productPage = document.querySelector(".main-wrapper__product-page");
      const productPageTitle = document.getElementById("product-page-title");
      const productPageImage = document.getElementById("product-page-image");
      const productPageInfo = document.getElementById("product-page-info");
      const productPagePrice = document.getElementById("product-page-price");
      currentProduct = products[i];

      productPage?.classList.add("--active");

      if (productPageTitle) {
        productPageTitle.innerHTML = products[i].title;
      }
      if (productPageImage) {
        productPageImage.setAttribute("src", products[i].imageUrl);
      }
      if (productPageInfo) {
        productPageInfo.innerHTML = products[i].info;
      }
      if (productPagePrice) {
        productPagePrice.innerHTML = products[i].price.toString() + " kr";
      }
    });
  }
};
const cartHtml = () =>{
  const cartContainer = document.querySelector("#cart-cart-items");
  if (cartContainer) {
    cartContainer.innerHTML = "";
  }
  for(let i = 0; i < cart.length; i++){
    const productContainer = document.createElement("div")
    const productTitle = document.createElement("h3")
    const productImage = document.createElement("img")
    const productPrice = document.createElement("p")
    const addButton = document.createElement("button")
    const removeButton = document.createElement("button")
    const articleNumber = document.createElement('p')

    productTitle.innerHTML = products[i].title;
    productImage.setAttribute('src', products[i].imageUrl);
    productPrice.innerHTML = products[i].price.toString() + " kr";
    addButton.innerHTML = '+';
    removeButton.innerHTML = '-';
    articleNumber.innerHTML = "Art.nr: " + products[i].id;

    productContainer.appendChild(productTitle);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(articleNumber);
    productContainer.appendChild(addButton);
    productContainer.appendChild(removeButton);

    cartContainer?.appendChild(productContainer);
  }
}
cartHtml()

const cartHtmlForCheckout = () =>{
  const cartInCheckout = document.querySelector("#checkout-cart-items")
  if (cartInCheckout) {
    cartInCheckout.innerHTML = ""
  }
  
  for(let i = 0; i < cart.length; i++){
    const productContainer = document.createElement("div")
    const productTitle = document.createElement("h3")
    const productImage = document.createElement("img")
    const productPrice = document.createElement("p")
    const addButton = document.createElement("button")
    const removeButton = document.createElement("button")
    const articleNumber = document.createElement('p')

    productTitle.innerHTML = products[i].title;
    productImage.setAttribute('src', products[i].imageUrl);
    productPrice.innerHTML = products[i].price.toString() + " kr";
    addButton.innerHTML = '+';
    removeButton.innerHTML = '-';
    articleNumber.innerHTML = "Art.nr: " + products[i].id;

    productContainer.appendChild(productTitle);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(articleNumber);
    productContainer.appendChild(addButton);
    productContainer.appendChild(removeButton);

    cartInCheckout?.appendChild(productContainer);
  }
}
cartHtmlForCheckout()

const productPageCartButton = document.getElementById(
  "product-page-cart-button"
);
productPageCartButton?.addEventListener("click", () => {
  cart.push(currentProduct);
  console.log(cart);
  cartHtml();
  cartHtmlForCheckout();
});

createProductsHtml();

const buyButton = document.getElementById("modalButton") as HTMLButtonElement;
buyButton.addEventListener("click", handlePurchase);

function handlePurchase(event: Event) {
  event.preventDefault();
  showPurchaseModal();
}

function showPurchaseModal() {
  const modal = document.getElementById("purchaseModal") as HTMLDivElement;
  modal.style.display = "block";

  const closeModalButton = document.getElementById(
    "closeModalButton"
  ) as HTMLButtonElement;
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

//funktioner för att visa sidorna när man öppnar och gömma sidorna när man stänger
function openPage(theButton: HTMLButtonElement, thePage: HTMLElement) {
  theButton.addEventListener("click", () => {
    thePage.classList.add("--active");
  });
}
function closePage(theButton: HTMLButtonElement, thePage: HTMLElement) {
  theButton.addEventListener("click", () => {
    thePage.classList.remove("--active");
  });
}

//öppna och stäng varukorg
const openCartButton = document.querySelector(
  ".main-wrapper__cart-button"
) as HTMLButtonElement;
const closeCartButton = document.querySelector(
  ".cart__close-button"
) as HTMLButtonElement;
const cartContainer = document.querySelector(".cart") as HTMLElement;

openPage(openCartButton, cartContainer);
closePage(closeCartButton, cartContainer);

//öppna och stäng kassasida
const openCheckoutButton = document.querySelector(
  ".cart__checkout-button"
) as HTMLButtonElement;
const closeCheckoutButton = document.querySelector(
  ".main-wrapper__checkout__close-button"
) as HTMLButtonElement;
const checkoutContainer = document.querySelector(
  ".main-wrapper__checkout"
) as HTMLElement;

openPage(openCheckoutButton, checkoutContainer);
closePage(closeCheckoutButton, checkoutContainer);

closeCheckoutButton.addEventListener("click", () => {
  cartContainer.classList.remove("--active");
});

//öppna och stäng produktsida
const closeProductPageButton = document.getElementById(
  "product-page-close-button"
) as HTMLButtonElement;
const productPage = document.querySelector(
  ".main-wrapper__product-page"
) as HTMLElement;
closePage(closeProductPageButton, productPage);
