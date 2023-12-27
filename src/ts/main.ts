import "./../scss/style.scss";
import { Product } from "./models/Product";


const products = [
    new Product("Kungsgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU","Medium",499,"001"),
    new Product("Rödgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU", "Medium",350,"002"),
    new Product("Kungsgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU","Stor",699,"003"),
    new Product("Kungsgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU","Liten",350,"004"),
    new Product("Rödgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU", "Liten",250,"005"),
    new Product("Rödgran","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xjNHyxM5rjPWc3rV_EZYVqaG5OmAso6eFw&usqp=CAU", "Stor",390,"006"),
];

console.log(products);

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
  productImage.innerHTML = products[i].imageUrl;
  productSize.innerHTML = products[i].size;
  productPrice.innerHTML = products[i].price.toString();
  productImage.setAttribute("src",products[i].imageUrl);
  productID.innerHTML = "Art.nr: " + products[i].id
  addToCartButton.innerHTML = "Lägg i varukorg"

  productContainer.classList.add("main-wrapper__products__product-card")

  productContainer.appendChild(productTitle)
  productContainer.appendChild(productImage)
  productContainer.appendChild(productSize)
  productContainer.appendChild(productPrice)
  productContainer.appendChild(addToCartButton)
  document.querySelector(".main-wrapper__products")?.appendChild(productContainer)
}
}
createProductsHtml()

