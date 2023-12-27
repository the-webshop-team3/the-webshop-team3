import "./../scss/style.scss";

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
