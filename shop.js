// ====================== ALL PRODUCTS ======================

const products = [

    // ================= MOBILES =================

    {
        name: "iPhone 16",
        category: "Mobiles",
        brand: "Apple",
        price: "₹79,999",
        rating: 5,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        name: "Samsung Galaxy S25",
        category: "Mobiles",
        brand: "Samsung",
        price: "₹74,999",
        rating: 5,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },

    {
        name: "OnePlus 13",
        category: "Mobiles",
        brand: "OnePlus",
        price: "₹64,999",
        rating: 4,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8FzV_i9fyqqym1pZaL6YI6cD4xzZ3ksA-vom5aq5fCoUYMGNx-y4ZEkSrua1dEc6hdTgm1i6u2Im-xClPG-kD8KYDFYd4JAwLEertC8kqTGrtaWqiuUur"
    },

    {
        name: "Google Pixel 9",
        category: "Mobiles",
        brand: "Google",
        price: "₹69,999",
        rating: 5,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaa2nO8SSA3E9HyDiGXPI3CgEIEXnGea5olc7RYMMnOqztHsFJfDMvbkVI9-zxiRx8x55M89DWMw2-pgdKMFRBDghcK2_73aD0JdhI6MI"
    },

    {
        name: "Nothing Phone 3",
        category: "Mobiles",
        brand: "Nothing",
        price: "₹49,999",
        rating: 4,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdTGONAGDu_4I75pD38UKNrYy4HlEuhbEXFBTFuVbjk-xfWGG3OcAotcjMQf_U3T1Vv9PxaD_Hu_TdsnbVZCA7JFWPfZ3AnOHeEp5UOv2tNNJIDo4v0OjrgoDzFskIhlQbD-JNucM&usqp=CAc  "
    },

    {
        name: "Xiaomi 15",
        category: "Mobiles",
        brand: "Xiaomi",
        price: "₹54,999",
        rating: 4,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTl3ZqJOCibs8z4PxcQM7BQGJlWcL3j-g_a4TnQHKeeTJoW-37IWjW0dV070f3ODmuM7492JXQAoub-jVLVbMh48axtJzZrpt5quv2G6LK6x9QpRY2PEg26oYs"
    },

    // ================= LAPTOPS =================

    {
        name: "MacBook Air M4",
        category: "Laptops",
        brand: "Apple",
        price: "₹1,09,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/computer/y/6/q/-original-imahh84y4whdbpzy.jpeg?q=90"
    },

    {
        name: "Dell XPS 15",
        category: "Laptops",
        brand: "Dell",
        price: "₹1,39,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/w/n/8/-original-imahg5fxfrez3gux.jpeg?q=70"
    },

    {
        name: "HP Spectre x360",
        category: "Laptops",
        brand: "HP",
        price: "₹1,24,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/computer/y/c/b/-original-imahg5fyxsyzy2z6.jpeg?q=90"
    },

    {
        name: "ASUS ROG Zephyrus",
        category: "Laptops",
        brand: "ASUS",
        price: "₹1,54,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/jxz0brk0/computer/g/j/6/asus-na-gaming-laptop-original-imafgbfguxbxhzet.jpeg?q=90"
    },

    {
        name: "Lenovo Legion 5",
        category: "Laptops",
        brand: "Lenovo",
        price: "₹1,19,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/computer/h/d/f/-original-imahhvcv9vpwgwft.jpeg?q=90"
    },

    {
        name: "Acer Nitro V",
        category: "Laptops",
        brand: "Acer",
        price: "₹84,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/computer/c/m/m/an515-47-gaming-laptop-acer-original-imagzuardhu6zwdd.jpeg?q=90"
    },

    // ================= HEADPHONES =================

    {
        name: "Sony WH-1000XM5",
        category: "Headphones",
        brand: "Sony",
        price: "₹29,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/o/g/7/-original-imahgr29hqgfsmww.jpeg?q=90"
    },

    {
        name: "Apple AirPods Max",
        category: "Headphones",
        brand: "Apple",
        price: "₹59,900",
        rating: 5,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJ_WGvmZ0NGy4v8boGigYc8Scf6bAWf6BQc1ADH9DuPykYL-1qW5gxzQaKI_DpgED1m4pa9qQcZXra7wFfxUqyEOsCYW9k"
    },

    {
        name: "JBL Tune 770NC",
        category: "Headphones",
        brand: "JBL",
        price: "₹8,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/4/m/0/-enriched-transparent-original-imahgfuk5rzgprzz.png?q=90"
    },

    {
        name: "Boat Rockerz 550",
        category: "Headphones",
        brand: "Boat",
        price: "₹2,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/d/8/o/-enriched-transparent-original-imagz5qagzek7tjz.png?q=90"
    },

    {
        name: "Sennheiser HD450BT",
        category: "Headphones",
        brand: "Sennheiser",
        price: "₹11,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/p/b/t/sennheiser-hd-450bt-enriched-transparent-original-imafpyxhwknhqp8k.png?q=90"
    },

    {
        name: "Noise Two",
        category: "Headphones",
        brand: "Noise",
        price: "₹1,499",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/y/v/v/-original-imah8syzqahyzdgz.jpeg?q=90"
    },

    // ================= SMART WATCHES =================

    {
        name: "Apple Watch Series 10",
        category: "Watches",
        brand: "Apple",
        price: "₹49,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/x/h/g/-enriched-transparent-original-imah4jnd3fzcpugh.png?q=90"
    },

    {
        name: "Samsung Galaxy Watch 7",
        category: "Watches",
        brand: "Samsung",
        price: "₹32,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/t/r/o/44-sm-l315f-android-samsung-yes-original-imahgfv9gazxytkf.jpeg?q=90"
    },

    {
        name: "OnePlus Watch 3",
        category: "Watches",
        brand: "OnePlus",
        price: "₹19,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/kmkxbww0/smartwatch/x/1/c/w301gb-android-ios-oneplus-original-imagfgmhfhdjxyue.jpeg?q=90"
    },

    {
        name: "Noise ColorFit Ultra",
        category: "Watches",
        brand: "Noise",
        price: "₹4,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/z/j/t/-original-imah39duzrxdyyyb.jpeg?q=90"
    },

    {
        name: "Fire-Boltt Ninja",
        category: "Watches",
        brand: "Fire-Boltt",
        price: "₹3,499",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/2/p/e/-original-imah7yt6jc9dkkbm.jpeg?q=90"
    },

    {
        name: "Amazfit GTR",
        category: "Watches",
        brand: "Amazfit",
        price: "₹13,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/jzrb53k0/smartwatch/r/y/9/amzgtraa-a1902-huami-original-imafjpezeugpymdu.jpeg?q=90 "
    },

    // ================= CAMERAS =================

    {
        name: "Canon EOS R10",
        category: "Cameras",
        brand: "Canon",
        price: "₹84,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/dslr-camera/m/v/1/-original-imahhy8ynhh9atfd.jpeg?q=90"
    },

    {
        name: "Sony Alpha A6700",
        category: "Cameras",
        brand: "Sony",
        price: "₹1,19,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/dslr-camera/5/t/r/-original-imagz5tqh6ymmm5n.jpeg?q=90"
    },

    {
        name: "Nikon Z50",
        category: "Cameras",
        brand: "Nikon",
        price: "₹79,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/dslr-camera/1/k/w/z50-21-51-z50-nikon-original-imah2xdr2ypwjpjn.jpeg?q=90"
    },

    {
        name: "GoPro Hero 13",
        category: "Cameras",
        brand: "GoPro",
        price: "₹39,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sports-action-camera/g/u/j/hero13-na-2-27-27-hero13-gopro-original-imah4cg7ya5tmzxh.jpeg?q=90"
    },

    {
        name: "DJI Pocket 3",
        category: "Cameras",
        brand: "DJI",
        price: "₹52,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sports-action-camera/f/b/a/osmo-pocket-3-osmo-2-64-pocket-3-dji-original-imaguzhfz5z4xphr.jpeg?q=90"
    },

    {
        name: "Fujifilm X-T30",
        category: "Cameras",
        brand: "Fujifilm",
        price: "₹89,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/juoes280/dslr-camera/2/m/v/x-t30-body-only-black-x-t30-body-only-black-fujifilm-original-imaffg9rbgm3thf6.jpeg?q=90"
    },

    // ================= GAMING =================

    {
        name: "PlayStation 5",
        category: "Gaming",
        brand: "Sony",
        price: "₹54,990",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/gamingconsole/j/g/z/-enriched-transparent-original-imahhgzqcjwdxgzx.png?q=90"
    },

    {
        name: "Xbox Series X",
        category: "Gaming",
        brand: "Microsoft",
        price: "₹52,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/gamingconsole/z/i/o/1024-xbox-series-x-microsoft-yes-original-imah2mfhkrbmgahh.jpeg?q=90"
    },

    {
        name: "Logitech G502 Mouse",
        category: "Gaming",
        brand: "Logitech",
        price: "₹4,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/mouse/j/j/h/g502-x-wired-logitech-original-imahg3j9gttgvpdw.jpeg?q=90"
    },

    {
        name: "Redragon Mechanical Keyboard",
        category: "Gaming",
        brand: "Redragon",
        price: "₹3,999",
        rating: 4,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/keyboard/gaming-keyboard/s/w/d/redragon-magic-wand-se-k655wg-red-switch-grega-tech-play-original-imah5zc3h3rhgy2v.jpeg?q=90"
    },

    {
        name: "Razer Kraken Headset",
        category: "Gaming",
        brand: "Razer",
        price: "₹7,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/kmxsakw0/headphone/q/y/b/kraken-x-multi-platform-wired-gaming-headset-razer-original-imagfqcjzy6bd6vx.jpeg?q=90  "
    },

    {
        name: "Xbox Wireless Controller",
        category: "Gaming",
        brand: "Microsoft",
        price: "₹5,999",
        rating: 5,
        image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/gamepad/g/e/3/xbox-s-x-wireless-controller-microsoft-enriched-transparent-original-imahf7yf9q4paejj.png?q=90"
    }

];

// ================= PRODUCT CARD =================

function productCard(product) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        stars += i <= product.rating
            ? '<i class="fa-solid fa-star"></i>'
            : '<i class="fa-regular fa-star"></i>';

    }

    return `

    <div class="col-lg-4 col-md-6 product-card">

        <div class="card2 h-100">

            <div class="product-img">

                <img src="${product.image}" alt="${product.name}" class="w-100" width="288px" height="288px">

                <button class="wishlist-btn">
                    <i class="fa-regular fa-heart"></i>
                </button>

                <a href="#" class="cart-btn add-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </a>

            </div>

            <div class="p-3">

                <span class="category">
                    ${product.brand}
                </span>

                <a href="#" class="card-title d-block mb-2">
                    ${product.name}
                </a>

                <div class="rating mb-2">
                    ${stars}
                </div>

                <h5 class="text-primary fw-bold">
                    ${product.price}
                </h5>

            </div>

        </div>

    </div>

    `;

}



// ================= DISPLAY PRODUCTS =================
function displayProducts(category, containerId, sectionId, search = "") {

    const filteredProducts = products.filter(product => {

        return product.category === category &&
        (
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search)
        );

    });

    const container = document.getElementById(containerId);
    const section = document.getElementById(sectionId);

    container.innerHTML = filteredProducts.map(productCard).join("");

    if(filteredProducts.length > 0){

        section.style.display = "block";

    }
    else{

        section.style.display = "none";

    }

}


// ================= RENDER ALL CATEGORIES =================

function renderAllProducts(search = ""){

    displayProducts("Mobiles","mobiles-container","mobiles-section",search);

    displayProducts("Laptops","laptops-container","laptops-section",search);

    displayProducts("Headphones","headphones-container","headphones-section",search);

    displayProducts("Watches","watches-container","watches-section",search);

    displayProducts("Cameras","cameras-container","cameras-section",search);

    displayProducts("Gaming","gaming-container","gaming-section",search);

}
renderAllProducts();



// ================= SEARCH =================

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup",function(){

    let search = this.value.toLowerCase().trim();

    renderAllProducts(search);

});


// ================= BUTTON EVENTS =================

document.addEventListener("click", function (e) {

    // Add To Cart

    if (e.target.closest(".add-cart")) {

        e.preventDefault();

        let card = e.target.closest(".card2");

        let productName = card.querySelector(".card-title").innerText;


                const popup = document.getElementById("cartPopup");

const popupText = document.getElementById("popupText");

popupText.innerHTML = `<strong>${productName}</strong> added to cart`;

popup.classList.add("show");

setTimeout(function(){

    popup.classList.remove("show");

},2000);
    }

    // Wishlist

    if (e.target.closest(".wishlist-btn")) {

        let icon = e.target.closest(".wishlist-btn").querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    }

});
let btn = (e.target.closest(".add-cart"));

btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';

setTimeout(function(){

btn.innerHTML =
'<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

},1500);

