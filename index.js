const productImage = document.getElementById('product1');
const addQuantity = document.getElementById('plus');
const removeQuantity = document.getElementById('minus');
const quantity = document.getElementById("quantity");


const thumbnails = document.querySelectorAll('.product-thumbnail');
for (let thumbnail of thumbnails){
    thumbnail.addEventListener('click', (e) =>{
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active-thumbnail');
        });
        e.target.classList.add('active-thumbnail');
        const imgSrc = e.target.alt;
        productImage.src = './images/' + imgSrc + '.jpg';
    });
}
let initialQuantity = 0;
addQuantity.addEventListener("click", () => {
  initialQuantity += 1;
  quantity.innerText = initialQuantity;
});
removeQuantity.addEventListener("click", () => {
  if (initialQuantity === 0) {
    initialQuantity = 0;
  } else {
    initialQuantity -= 1;
  }
  quantity.innerText = initialQuantity;
  quantityCart.innerText = initialQuantity;
  fullPriceText = 125.0 * initialQuantity;
  fullPrice.innerText = fullPriceText;
});