

//funktioner för att visa sidorna när man öppnar och gömma sidorna när man stänger
export function openPage(theButton: HTMLButtonElement, thePage: HTMLElement) {
    theButton.addEventListener("click", () => {
      thePage.classList.add("--active");
    });
  }
  export function closePage(theButton: HTMLButtonElement, thePage: HTMLElement) {
    theButton.addEventListener("click", () => {
      thePage.classList.remove("--active");
    });
  }


export function validateForm(): boolean {
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

  if (address.value === "" || !isValidAddress(address.value)) {
    address.classList.add("is-invalid");
    return false;
  } else {
    address.classList.remove("is-invalid");
  }

  if (zipcode.value === "" || !isValidPostalCode(zipcode.value)) {
    zipcode.classList.add("is-invalid");
    return false;
  } else {
    zipcode.classList.remove("is-invalid");
  }

  if (email.value === "" || !isValidEmail(email.value)) {
    email.classList.add("is-invalid");
    return false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (cellPhone.value === "" || !isValidPhoneNumber(cellPhone.value)) {
    cellPhone.classList.add("is-invalid");
    return false;
  } else {
    cellPhone.classList.remove("is-invalid");
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

export const stopScroll = () => {
  const pages = {
    productPage: document.getElementById("wrapper-product-page"),
    cart: document.getElementById("cart"),
    checkout: document.querySelector(".c-checkout"),
  };

  if (
    pages.cart?.classList.contains("--active") ||
    pages.checkout?.classList.contains("--active") ||
    pages.productPage?.classList.contains("--active")
  ) {
    document.body.classList.add("stop-scroll");
    console.log("hej");
  } else {
    document.body.classList.remove("stop-scroll");
  }
};



  