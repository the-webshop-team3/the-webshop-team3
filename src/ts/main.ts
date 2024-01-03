import "./../scss/style.scss";
import { closePage, openPage } from "./functions";
import { Product } from "./models/Product";

const products = [
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce3.webp",
    "Medium",
    499,
    "Text om gran 1",
    "001"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce.webp",
    "Medium",
    350,
    "Text om gran 2",
    "002"
  ),
  new Product(
    "Blågran",
    "src/assets/img/resized_images/blue_spruce.webp",
    "Stor",
    699,
    "Text om gran 3",
    "003"
  ),
  new Product(
    "Bosnisk tall",
    "src/assets/img/resized_images/bosnian_pine.webp",
    "Medel",
    750,
    "Text om gran 4",
    "004"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce2.webp",
    "Liten",
    250,
    "Text om gran 5",
    "005"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce3.webp",
    "Stor",
    390,
    "Text om gran 6",
    "006"
  ),
];

const cart: Product[] = JSON.parse(
  sessionStorage.getItem("cartItems") || JSON.stringify([])
);

let totalPrice: number = 0;

console.log(products);
let currentProduct: Product;

const createProductsHtml = () => {
  for (let i = 0; i < products.length; i++) {
    const list = document.querySelector(".l-list");
    const listItem = document.createElement("li");
    const productContainer = document.createElement("div");
    const productHeader = document.createElement("div");
    const productTitle = document.createElement("h2");
    const productBody = document.createElement("div");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("p");
    const productId = document.createElement("p");
    const productSize = document.createElement("p");
    const productFooter = document.createElement("div");
    const addToCartButton = document.createElement("button");

    productTitle.innerHTML = products[i].title;
    productImage.innerHTML = products[i].imageUrl;
    productSize.innerHTML = products[i].size;
    productPrice.innerHTML = `${products[i].price.toString()} kr`; //-----
    productImage.setAttribute("src", products[i].imageUrl);
    productId.innerHTML = "Art.nr: " + products[i].id;
    addToCartButton.innerHTML = "Lägg i varukorg";

    listItem.classList.add("l-list__item");
    productContainer.classList.add("c-card");
    productHeader.classList.add("c-card__header");
    productTitle.classList.add("c-card__title");
    productBody.classList.add("c-card__body");
    productImage.classList.add("c-card__image");
    productPrice.classList.add("c-card__price");
    productSize.classList.add("c-card__attribute");
    productId.classList.add("c-card__text");
    productFooter.classList.add("c-card__footer");
    addToCartButton.classList.add("c-button", "c-button--primary");

    listItem.appendChild(productImage);
    productContainer.appendChild(productHeader);
    productHeader.appendChild(productTitle);
    productContainer.appendChild(productBody);
    productBody.appendChild(productSize);
    productBody.appendChild(productPrice);

    list?.appendChild(listItem);
    listItem.appendChild(productContainer);
    productContainer.appendChild(productFooter);
    productFooter.appendChild(addToCartButton);

    addToCartButton.addEventListener("click", () => {
      const checkId = cart.findIndex(
        (product) => product.id === products[i].id
      );
      console.log(checkId);

      if (checkId !== -1) {
        products[i].quantity++;
        totalPrice += products[i].price;
        console.log(cart);
        console.log(totalPrice);

        cartHtml();
        cartHtmlForCheckout();
      } else {
        cart.push(products[i]);
        totalPrice += products[i].price;
        console.log(cart);
        console.log(totalPrice);

        cartHtml();
        cartHtmlForCheckout();
      }
    });
    const clickOnProduct = () => {
      const productPage = document.querySelector(".c-product-page");
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
    };
    productImage.addEventListener("click", clickOnProduct);
    productHeader.addEventListener("click", clickOnProduct);
    productBody.addEventListener("click", clickOnProduct);
  }
};
const totalPriceTag = document.createElement("p");
const cartHtml = () => {
  sessionStorage.setItem("cartItems", JSON.stringify(cart));

  const cartContainer = document.querySelector("#cart-items");
  totalPriceTag.innerHTML = "Summa: " + totalPrice.toString() + " kr";

  if (cartContainer) {
    cartContainer.innerHTML = "";
  }
  for (let i = 0; i < cart.length; i++) {
    const listItem = document.createElement("li");
    const productContainer = document.createElement("div");
    const productHeader = document.createElement("div");
    const productTitle = document.createElement("h3");
    const imageContainer = document.createElement("figure");
    const productImage = document.createElement("img");
    const productBody = document.createElement("div");
    const productPrice = document.createElement("p");
    const articleNumber = document.createElement("p");
    const productSize = document.createElement("p");
    const cardFooter = document.createElement("div");
    const addButton = document.createElement("button");
    const quantityTag = document.createElement("span");
    const removeButton = document.createElement("button");

    listItem.classList.add("l-list__item");
    productContainer.classList.add("c-card-cart");
    productHeader.classList.add("c-card__header");
    imageContainer.classList.add("c-card-cart__figure");
    productImage.classList.add("c-card-cart__image");
    productBody.classList.add("c-card-cart__body");
    productPrice.classList.add("c-card__price");
    articleNumber.classList.add("c-card__id");
    productSize.classList.add("c-card__attribute");
    cardFooter.classList.add("c-card-cart__footer");

    productTitle.innerHTML = cart[i].title;
    productImage.setAttribute("src", cart[i].imageUrl);
    productPrice.innerHTML = cart[i].price.toString() + " kr";
    productSize.innerHTML = "Storlek: " + cart[i].size;
    articleNumber.innerHTML = "Art.nr: " + cart[i].id;
    addButton.innerHTML = "+";
    quantityTag.innerHTML = cart[i].quantity.toString();
    removeButton.innerHTML = "-";

    /* productContainer.appendChild(productHeader); */
    productContainer.appendChild(imageContainer);
    imageContainer.appendChild(productImage);
    productContainer.appendChild(productBody);
    productBody.appendChild(productTitle);
    productBody.appendChild(productPrice);
    productBody.appendChild(productSize);
    productBody.appendChild(articleNumber);
    productContainer.appendChild(cardFooter);
    cardFooter.appendChild(removeButton);
    cardFooter.appendChild(quantityTag);
    cardFooter.appendChild(addButton);
    listItem.appendChild(productContainer);

    cartContainer?.appendChild(listItem);

    addButton.addEventListener("click", () => {
      cart[i].quantity++;
      totalPrice += cart[i].price;
      console.log(cart);
      console.log(totalPrice);
      cartHtml();
      cartHtmlForCheckout();
    });
    removeButton.addEventListener("click", () => {
      if (cart[i].quantity === 1) {
        totalPrice -= cart[i].price;
        cart.splice(i, 1);
        cartHtml();
        cartHtmlForCheckout();
      } else {
        cart[i].quantity--;
        totalPrice -= cart[i].price;
        console.log(cart);
        console.log(totalPrice);
        cartHtml();
        cartHtmlForCheckout();
      }
    });
  }
  document.querySelector(".cart__total-price")?.appendChild(totalPriceTag);
};
cartHtml();

const cartHtmlForCheckout = () => {
  sessionStorage.setItem("cartItems", JSON.stringify(cart));

  const cartInCheckout = document.querySelector("#checkout-cart-items");
  let totalPriceInCheckout = document.getElementById("total-price-checkout");
  if (totalPriceInCheckout) {
    totalPriceInCheckout.innerHTML = "Summa: " + totalPrice.toString() + " kr";
  }

  if (cartInCheckout) {
    cartInCheckout.innerHTML = "";
  }

  for (let i = 0; i < cart.length; i++) {
    const productContainer = document.createElement("div");
    const productTitle = document.createElement("h3");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("p");
    const addButton = document.createElement("button");
    const quantityTag = document.createElement("span");
    const removeButton = document.createElement("button");
    const articleNumber = document.createElement("p");

    productTitle.innerHTML = cart[i].title;
    productImage.setAttribute("src", cart[i].imageUrl);
    productPrice.innerHTML = cart[i].price.toString() + " kr";
    addButton.innerHTML = "+";
    quantityTag.innerHTML = cart[i].quantity.toString();
    removeButton.innerHTML = "-";
    articleNumber.innerHTML = "Art.nr: " + cart[i].id;

    productContainer.appendChild(productTitle);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(articleNumber);
    productContainer.appendChild(addButton);
    productContainer.appendChild(quantityTag);
    productContainer.appendChild(removeButton);

    cartInCheckout?.appendChild(productContainer);

    addButton.addEventListener("click", () => {
      cart[i].quantity++;
      totalPrice += cart[i].price;
      console.log(cart);
      console.log(totalPrice);
      cartHtml();
      cartHtmlForCheckout();
    });
    removeButton.addEventListener("click", () => {
      if (cart[i].quantity === 1) {
        totalPrice -= cart[i].price;
        cart.splice(i, 1);
        cartHtml();
        cartHtmlForCheckout();
      } else {
        cart[i].quantity--;
        totalPrice -= cart[i].price;
        console.log(cart);
        console.log(totalPrice);
        cartHtml();
        cartHtmlForCheckout();
      }
    });
  }
};
cartHtmlForCheckout();

const productPageCartButton = document.getElementById(
  "product-page-cart-button"
);
productPageCartButton?.addEventListener("click", () => {
  const checkId = cart.findIndex((product) => product.id === currentProduct.id);
  console.log(checkId);

  if (checkId !== -1) {
    currentProduct.quantity++;
    totalPrice += currentProduct.price;
    console.log(cart);
    console.log(totalPrice);

    cartHtml();
    cartHtmlForCheckout();
  } else {
    cart.push(currentProduct);
    totalPrice += currentProduct.price;
    console.log(cart);
    console.log(totalPrice);

    cartHtml();
    cartHtmlForCheckout();
  }
});

createProductsHtml();

const buyButton = document.getElementById("modalButton") as HTMLButtonElement;
buyButton.addEventListener("click", handlePurchase);

function handlePurchase(event: Event) {
  event.preventDefault();

  if (validateForm()) {
    showPurchaseModal();
  }
}

//---------
function validateForm(): boolean {
  const fullname = document.getElementById("fullname") as HTMLInputElement;
  const address = document.getElementById("address") as HTMLInputElement;
  const zipcode = document.getElementById("zipcode") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const cellPhone = document.getElementById("cellPhone") as HTMLInputElement;


  if (fullname.value === "" || !isValidFullName(fullname.value)) {
    fullname.classList.add("is-invalid");
    return false;
  } else {
    fullname.classList.remove("is-invalid");
  }

  if(address.value === "" || !isValidAddress(address.value)){
    address.classList.add('is-invalid');
    return false;
  } else {
    address.classList.remove('is-invalid');
  }

  if(zipcode.value === "" || !isValidPostalCode(zipcode.value)){
    zipcode.classList.add('is-invalid');
    return false;
  } else {
    zipcode.classList.remove('is-invalid');
  }

  if(email.value === "" || !isValidEmail(email.value)){
    email.classList.add('is-invalid');
    return false;
  } else {
    email.classList.remove('is-invalid');
  }

  if(cellPhone.value === "" || !isValidPhoneNumber(cellPhone.value)){
    cellPhone.classList.add('is-invalid');
    return false;
  } else {
    cellPhone.classList.remove('is-invalid');
  }

  return true;
}

function isValidFullName(fullName: string): boolean {
  return /^[A-Za-z]+\s[A-Za-z]+$/.test(fullName);
}

function isValidAddress(address: string): boolean {
  return address.trim().length >= 10;
}

function isValidPostalCode(postalCode: string): boolean {
  return /^\d{5}$/.test(postalCode);
}

function isValidEmail(email: string): boolean {
  return /@hotmail\.com$|@gmail\.com$|@yahoo\.com$/.test(email);
}

function isValidPhoneNumber(phoneNumber: string): boolean {
  return /^\d{10}$/.test(phoneNumber);
}
//---------


function showPurchaseModal() {
  const modal = document.getElementById("purchaseModal") as HTMLDivElement;
  modal.style.display = "block";

  const closeModalButton = document.getElementById(
    "closeModalButton"
  ) as HTMLButtonElement;
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";

    //nollställer totalpriset efter genomfört köp
    totalPrice = 0;

    //tömmer cart arrayen och uppdaterar html
    cart.splice(0, cart.length);
    cartHtml();
    cartHtmlForCheckout();
    console.log(cart);
    //stänger de öppna sidorna och scrollar till toppen
    checkoutContainer.classList.remove("--active");
    cartContainer.classList.remove("--active");
    productPage.classList.remove("--active");
    window.scrollTo(0, 0);
  });
}

//öppna och stäng varukorg
const openCartButton = document.querySelector(
  "#main-cart-button"
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
  "#checkout-close-button"
) as HTMLButtonElement;
const checkoutContainer = document.querySelector(".c-checkout") as HTMLElement;

openPage(openCheckoutButton, checkoutContainer);
closePage(closeCheckoutButton, checkoutContainer);

closeCheckoutButton.addEventListener("click", () => {
  cartContainer.classList.remove("--active");
});

//öppna och stäng produktsida
const closeProductPageButton = document.getElementById(
  "product-page-close-button"
) as HTMLButtonElement;
const productPage = document.querySelector(".c-product-page") as HTMLElement;
closePage(closeProductPageButton, productPage);
