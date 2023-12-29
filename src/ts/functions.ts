

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