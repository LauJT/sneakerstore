const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            { code: "black", img: "./img/Product/air.png" },
            { code: "darkblue", img: "./img/Product/air2.png" },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            { code: "lightgray", img: "./img/Product/jordan.png" },
            { code: "green", img: "./img/Product/jordan2.png" },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            { code: "lightgray", img: "./img/Product/blazer.png" },
            { code: "green", img: "./img/Product/blazer2.png" },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            { code: "black", img: "./img/Product/crater.png" },
            { code: "lightgrey", img: "./img/Product/crater2.png" },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            { code: "gray", img: "./img/Product/hippie.png" },
            { code: "black", img: "./img/Product/hippie2.png" },
        ],
    },
    {
        id: 6,
        title: "Dunk",
        price: 109,
        colors: [
            { code: "black", img: "./img/Product/dunk1.0.png" },
            { code: "gray", img: "./img/Product/dunk2.0.png" },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Update selected product
        choosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update color buttons
        currentProductColors.forEach((color, idx) => {
            color.style.backgroundColor = choosenProduct.colors[idx].code;
        });
    });
});

// Color picker event
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

// Size selector event
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Payment modal toggle
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

