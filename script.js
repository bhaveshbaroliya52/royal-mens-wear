
// const products = [
//     {
//         name: "Classic Black Shirt",
//         category: "SHIRTS",
//         price: 899,
//         image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"
//     },
//     {
//         name: "Premium White Shirt",
//         category: "SHIRTS",
//         price: 999,
//         image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"
//     },
//     {
//         name: "Casual T-Shirt",
//         category: "T-SHIRTS",
//         price: 499,
//         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
//     },
//     {
//         name: "Premium Black T-Shirt",
//         category: "T-SHIRTS",
//         price: 599,
//         image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"
//     },
//     {
//         name: "Classic Blue Jeans",
//         category: "JEANS",
//         price: 1299,
//         image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
//     },
//     {
//         name: "Modern Denim Jeans",
//         category: "JEANS",
//         price: 1499,
//         image: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?w=600"
//     },
//     {
//         name: "Formal Trousers",
//         category: "TROUSERS",
//         price: 1099,
//         image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600"
//     },
//     {
//         name: "Premium Casual Trouser",
//         category: "TROUSERS",
//         price: 1199,
//         image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"
//     }
// ];

// const productGrid = document.getElementById("productGrid");

// // DISPLAY PRODUCTS

// function displayProducts(category = "ALL") {

//     const filteredProducts = category === "ALL"
//         ? products
//         : products.filter(product => product.category === category);

//     productGrid.innerHTML = "";

//     filteredProducts.forEach(product => {

//         const card = document.createElement("div");
//         card.className = "product-card";

//         const img = document.createElement("img");
//         img.src = product.image;
//         img.alt = product.name;
//         img.loading = "lazy";

//         const info = document.createElement("div");
//         info.className = "product-info";

//         const name = document.createElement("h3");
//         name.textContent = product.name;

//         const price = document.createElement("p");
//         price.textContent = "₹" + product.price.toLocaleString("en-IN");

//         info.appendChild(name);
//         info.appendChild(price);

//         card.appendChild(img);
//         card.appendChild(info);

//         productGrid.appendChild(card);
//     });
// }

// // CATEGORY FILTER

// const categories = document.querySelectorAll(".category");

// categories.forEach(category => {

//     category.addEventListener("click", () => {

//         const selectedCategory = category.textContent.trim();

//         displayProducts(selectedCategory);

//         document.getElementById("collection").scrollIntoView({
//             behavior: "smooth"
//         });

//     });

// });

// // MOBILE MENU

// const menuBtn = document.getElementById("menuBtn");
// const navMenu = document.getElementById("navMenu");

// menuBtn.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
// });

// navMenu.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//         navMenu.classList.remove("active");
//     });
// });

// // INITIAL DISPLAY

// displayProducts();






const products = [
    {
        name: "Classic Black Shirt",
        category: "SHIRTS",
        price: 899,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"
    },
    {
        name: "Premium White Shirt",
        category: "SHIRTS",
        price: 999,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"
    },
    {
        name: "Casual T-Shirt",
        category: "T-SHIRTS",
        price: 499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
        name: "Premium Black T-Shirt",
        category: "T-SHIRTS",
        price: 599,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"
    },
    {
        name: "Classic Blue Jeans",
        category: "JEANS",
        price: 1299,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
    },
    {
        name: "Modern Denim Jeans",
        category: "JEANS",
        price: 1499,
        image: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?w=600"
    },
    {
        name: "Formal Trousers",
        category: "TROUSERS",
        price: 1099,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600"
    },
    {
        name: "Premium Casual Trouser",
        category: "TROUSERS",
        price: 1199,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"
    }
];

const productGrid = document.getElementById("productGrid");

// PRODUCT MODAL ELEMENTS

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalOrder = document.querySelector(".modal-order");

let selectedProduct = null;
let selectedSize = "";

// DISPLAY PRODUCTS

function displayProducts(category = "ALL") {

    const filteredProducts = category === "ALL"
        ? products
        : products.filter(product => product.category === category);

    productGrid.innerHTML = "";

    filteredProducts.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.loading = "lazy";

        const info = document.createElement("div");
        info.className = "product-info";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "₹" + product.price.toLocaleString("en-IN");

        info.appendChild(name);
        info.appendChild(price);

        card.appendChild(img);
        card.appendChild(info);

        // OPEN QUICK VIEW

        card.addEventListener("click", () => {
            openProductModal(product);
        });

        productGrid.appendChild(card);
    });
}

// OPEN PRODUCT MODAL

function openProductModal(product) {

    selectedProduct = product;
    selectedSize = "";

    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;

    modalPrice.textContent =
        "₹" + product.price.toLocaleString("en-IN");

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// CLOSE MODAL

function closeProductModal() {

    productModal.classList.remove("active");
    document.body.style.overflow = "";

    selectedProduct = null;
    selectedSize = "";
}

modalClose.addEventListener("click", closeProductModal);

// CLICK OUTSIDE MODAL

productModal.addEventListener("click", (e) => {

    if (e.target === productModal) {
        closeProductModal();
    }

});

// ESCAPE KEY

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && productModal.classList.contains("active")) {
        closeProductModal();
    }

});

// SIZE SELECTION

document.querySelectorAll(".size-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".size-btn").forEach(button => {
            button.classList.remove("selected");
        });

        btn.classList.add("selected");
        selectedSize = btn.textContent.trim();

    });

});

// WHATSAPP ORDER

modalOrder.addEventListener("click", () => {

    if (!selectedProduct) return;

    if (!selectedSize) {
        alert("Please select your size first!");
        return;
    }

    // REPLACE WITH SHOPKEEPER'S WHATSAPP NUMBER
    const whatsappNumber = "919023962442";

    if (whatsappNumber.includes("X")) {
        alert("Please add the shopkeeper's WhatsApp number in script.js first.");
        return;
    }

    const message =
        `Hello! I want to order:\n\n` +
        `Product: ${selectedProduct.name}\n` +
        `Price: ₹${selectedProduct.price}\n` +
        `Size: ${selectedSize}\n\n` +
        `Please share availability.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});

// CATEGORY FILTER

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        const selectedCategory = category.textContent.trim();

        displayProducts(selectedCategory);

        document.getElementById("collection").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});

// INITIAL DISPLAY

displayProducts();
