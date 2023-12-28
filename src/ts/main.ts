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

console.log(products);

const cart:Product[] = []

const createProductsHtml = () => {
for (let i = 0; i < products.length; i++){
    const productContainer = document.createElement("div")
    const productTitle = document.createElement("h2");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("p");
    const productID = document.createElement("p");
    const productSize = document.createElement("p")
    const addToCartButton = document.createElement("button")

    productTitle.innerHTML = products[i].title;
    // productImage.innerHTML = products[i].imageUrl;
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

      //---->
      addToCartButton.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        addToCart(products[i]);
      });
      
      productContainer.addEventListener("click", () => {
        const productPage = document.querySelector(".main-wrapper__product-page");
        const productPageTitle = document.getElementById("product-page-title");
        const productPageImage = document.getElementById("product-page-image");
        const productPageInfo = document.getElementById("product-page-info");
        const productPagePrice = document.getElementById("product-page-price");
      
    
        //-->
        const productPageAddToCartButton = document.getElementById("product-page-close-button") as HTMLButtonElement;

        
        productPage?.classList.add("main-wrapper__product-page--active");
        
        if (productPageTitle) {
          productPageTitle.innerHTML = products[i].title;
        }
        if (productPageImage) {
          productPageImage.setAttribute("src",products[i].imageUrl)
        }
        if (productPageInfo) {
          productPageInfo.innerHTML = products[i].info;
        }
        if (productPagePrice){
          productPagePrice.innerHTML = products[i].price.toString() + " kr";
        }
        
        //--->
        productPageAddToCartButton.addEventListener('click', () => {
          addToCart(products[i]);
        });
      });
    }
  };

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

//---->
function addToCart(product: Product) {
  cart.push(product);

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart__item");
  cartItem.innerHTML = `
    <p>${product.title}</p>
    <p>${product.price} kr</p>
  `;

  const cartItemsContainer = document.querySelector(".cart__items") as HTMLElement;
  cartItemsContainer.appendChild(cartItem);

  updateCartItemCount();
}

function updateCartItemCount() {
  const cartItemCount = document.querySelectorAll(".cart__items .cart__item").length;
  const openCartButton = document.querySelector(".main-wrapper__cart-button") as HTMLButtonElement;
  openCartButton.innerText = `Öppna varukorg (${cartItemCount})`;
}
//---->

function openPage(theButton: HTMLButtonElement, thePage: HTMLElement) {
  theButton.addEventListener("click", () => {
    thePage.classList.add("active");

    console.log("hdhd");
  });
}

function closePage(theButton: HTMLButtonElement, thePage: HTMLElement) {
  theButton.addEventListener("click", () => {
    thePage.classList.remove("active");
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

/* const openCheckoutButton = document.querySelector(".cart__checkout-button");
const checkoutContainer = document.querySelector(".main-wrapper__checkout");

openCheckoutButton?.addEventListener("click", () => {
  checkoutContainer?.classList.add("main-wrapper__checkout--active");
}); */
