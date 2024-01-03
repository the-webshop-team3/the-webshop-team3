import "./../scss/style.scss";
import { closePage, openPage } from "./functions";
import { Product } from "./models/Product";

const products = [
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce3.webp",
    "230 – 260 cm",
    499,
    "Rödgranen, en symbol för julens stämning, är känd för sina stadiga grenar och doftande barr som sprider en friskhet som förtrollar. Med dess frodiga barrverk och praktfulla utseende blir denna gran ett lysande inslag i juldekorationerna. Med rätt underhåll sitter barren kvar länge och ger en varaktig skönhet som fyller hemmet med en känsla av tradition och glädje under helgerna.",
    "001"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce.webp",
    "180 – 230 cm",
    350,
    "Inget fångar julens anda som den klassiska rödgranen. Dess slanka silhuett och intensiva gröna barr skapar en fantastisk atmosfär och sprider en ljuvlig doft i varje vrå. Rödgranen är mer än en dekoration – den är själva hjärtat i julens festligheter och bjuder in till en tid av gemenskap och värme.",
    "002"
  ),
  new Product(
    "Blågran",
    "src/assets/img/resized_images/blue_spruce.webp",
    "180 – 230 cm",
    699,
    "Blågranen är en storslagen symbol för vinterns charm och elegans. Med sina mjuka, silverblå barr skapar denna gran en atmosfär av frostig skönhet i varje rum. Dess kompakta och välmående grenverk ger en perfekt plats att hänga julens dekorationer och ljus, medan dess hållbara barr behåller sin färg och form under hela säsongen. Blågranen erbjuder en unik och förtrollande touch till julens firande och blir snabbt hjärtat i ditt hem under denna festliga tid.",
    "003"
  ),
  new Product(
    "Bosnisk tall",
    "src/assets/img/resized_images/bosnian_pine.webp",
    "180 – 230 cm",
    750,
    "Bosnisk tall, med sin ståtliga och majestätiska gestalt, är en symbol för vinterens skönhet och styrka. Dess karaktäristiska mörkgröna barr och robusta grenar skapar en imponerande kuliss för julens festligheter. Med en naturlig symmetri och en doft av skogens friskhet blir denna tall en enastående centralpunkt för dekorationer och ljus. Dess hållbara kvalitet och långvariga skönhet gör den till det perfekta valet för att införa en känsla av tradition och elegans i ditt hem under julen.",
    "004"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce2.webp",
    "100 – 140 cm",
    250,
    "Rödgranen är julens symbol av skönhet och elegans. Dess frodiga barrverk skänker inte bara en frisk doft utan också en levande touch till varje hem. Med en rödgran i huset skapas en atmosfär av tradition och fröjd, där varje barrstrå förmedlar känslan av en härlig julstund.",
    "005"
  ),
  new Product(
    "Rödgran",
    "src/assets/img/resized_images/red_spruce_xl.webp",
    "300 – 350 cm",
    990,
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
      const readMore = document.getElementById(
        "read-more"
      ) as HTMLButtonElement;
      const productPagePrice = document.getElementById("product-page-price");
      const productPageWrapper = document.getElementById(
        "wrapper-product-page"
      );
      const productPageClose = document.getElementById(
        "product-page-close-button"
      );
      currentProduct = products[i];

      if (productPageWrapper) {
        productPageWrapper.classList.add("--active");
      }
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
      readMore?.addEventListener("click", () => {
        if (productPageInfo?.classList.contains("--active")) {
          productPageInfo.classList.remove("--active");
          readMore.innerHTML = "Läs mer";
        } else {
          productPageInfo?.classList.add("--active");
          readMore.innerHTML = "Visa mindre";
        }
      });
      productPageClose?.addEventListener("click", () => {
        productPageWrapper?.classList.remove("--active");
        if (productPageInfo?.classList.contains("--active")) {
          productPageInfo.classList.remove("--active");
          readMore.innerHTML = "Läs mer";
        }
      });
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

const stopScroll = () => {
  const pages = {
  productPage: document.getElementById("wrapper-product-page"),
  cart: document.getElementById("cart"),
  checkout: document.querySelector(".c-checkout")
}

if(pages.cart?.classList.contains("--active") || pages.checkout?.classList.contains("--active") || pages.productPage?.classList.contains("--active")){
  document.body.classList.add("stop-scroll")
  console.log("hej")
}
else{
  document.body.classList.remove("stop-scroll")
}
}

const closeProductPageButton = document.getElementById(
  "product-page-close-button"
) as HTMLButtonElement;
const productPage = document.querySelector("#wrapper-product-page") as HTMLElement;

stopScroll()
openCheckoutButton.addEventListener("click", stopScroll)
closeCheckoutButton.addEventListener("click", stopScroll)
openCartButton.addEventListener("click", stopScroll)
closeCartButton.addEventListener("click", stopScroll)
productPage.addEventListener("click", stopScroll)
closeProductPageButton.addEventListener("click", stopScroll)

const cardTitle = document.querySelector(".c-card__header");
const cardImage = document.querySelector(".c-card__image");
const cardInfo = document.querySelector(".c-card__body");

cardTitle?.addEventListener("click", stopScroll)
cardImage?.addEventListener("click", stopScroll)
cardInfo?.addEventListener("click", stopScroll)
