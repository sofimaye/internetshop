const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");


let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove("active");
        item.classList.add("active");
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggle size buttoms

const sizeBtns = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        sizeBtns[checkedBtn].classList.remove('check');
        button.classList.add("check");
        checkedBtn = i;
    })
})

