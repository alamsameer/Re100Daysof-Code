let bigImg = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let changer = 0;
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let item = document.querySelector(".item");
let thumbnails = document.querySelectorAll(".thumbnails");
let imgItem = document.querySelector("img-item");
let Cart=document.querySelector("#cart")
let myCart = document.querySelector(".myCart");
Cart.addEventListener("click",()=>{
  myCart.classList.toggle("hide")
})
next.addEventListener("click", (e) => {
  if (changer > 2) return;
  else { 
    changer++;
  }
  item.src = `${bigImg[changer]}`;
});
previous.addEventListener("click", (e) => {
  if (changer < 1) return;
  changer--;
  item.src = `${bigImg[changer]}`;
});
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active-thumbnail");
    });
    e.currentTarget.classList.add("active-thumbnail");
    let clickedImg = +e.currentTarget.dataset.photo;
    changer = clickedImg;
    item.src = `${bigImg[clickedImg]}`;
  });
});

item.addEventListener("click", (e) => {
  let section = document.createElement("section");
  section.classList.add("openbox");
  let figure = document.createElement("figure");
  figure.classList.add("openbox-img-container");
  let img = document.createElement("img");
  img.setAttribute("src", `${item.src}`);
  let span = document.createElement("span");
  span.classList.add("close");
  let spanImg = document.createElement("img");
  spanImg.setAttribute("src", "./images/icon-close.svg");
  span.appendChild(spanImg);
  figure.appendChild(img);
  figure.appendChild(span);
  section.appendChild(figure);
  document.body.appendChild(section);
  var close = document.querySelector(".close");
  close.addEventListener("click", () => {
    document.body.removeChild(section);
  });
});

let itemnum = 1;
let count =document.querySelector(".count")
let add=document.querySelector(".add")
let subtract=document.querySelector(".subtract")
let addToCart=document.querySelector(".addToCart")
let disPrice=document.querySelector(".disPrice")
count.innerHTML = itemnum;
add.addEventListener("click", () => {
  itemnum++;
  count.innerHTML = itemnum;
});
subtract.addEventListener("click", () => {
  if (itemnum == 1) return;
  itemnum--;
  count.innerHTML = itemnum;
});
addToCart.addEventListener("click", () => {
  calculate(itemnum);

});
function calculate(n) {
  let price = +disPrice.textContent;
  let total = price * n;
  console.log(total);
  let cartObj = {
    img: "./images/image-product-1-thumbnail.jpg",
    productName: "",
    sellingPrice:125,
    numItem: n,
    total: total,
  };
  return addCart(cartObj);
}

let cart="";
function addCart(mycart) {
 
 document.querySelector(".myCart").style.padding="1rem";
  console.log(mycart);
  //  <h3 style="margin-bottom: .6rem;">cart</h3>
  cart += `<article>
       <div class="addedItem">
         <figure>
           <img src="${mycart.img}"alt ="" class="checkout-img" />
         </figure>
         <div class="price-info">
           <p class="product-name">full limited sneaker</p>
           <span class="selling-price">${mycart.sellingPrice}</span>
           <span class="numItem">* ${mycart.numItem}</span>
           <span class="total"> = ${mycart.total}</span>
         </div>  
     </article>
     <button class="checkout">checkout</button>`;
    //  console.log(cart);
    console.log(myCart);
  myCart.innerHTML = cart;
  return myCart;
}
