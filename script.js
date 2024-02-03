const men = document.getElementById("catmen");
const women = document.getElementById("catwomen");
const kids = document.getElementById("catkids");
const men1 = document.getElementsByClassName("men");
const women1 = document.getElementsByClassName("women");
const kids1 = document.getElementsByClassName("kids");


men.addEventListener("click", () => {
    men.classList.add("active");
    women.classList.remove("active");
    kids.classList.remove("active");
    men1[0].style.display = "flex";
    women1[0].style.display = "none";
    kids1[0].style.display = "none";

});

women.addEventListener("click", () => {
    women.classList.add("active");
    men.classList.remove("active");
    kids.classList.remove("active");
    women1[0].style.display = "flex";
    men1[0].style.display = "none";
    kids1[0].style.display = "none";
});

kids.addEventListener("click", () => {
    kids.classList.add("active");
    men.classList.remove("active");
    women.classList.remove("active");
    kids1[0].style.display = "flex";
    women1[0].style.display = "none";
    men1[0].style.display = "none";
});




const fetchdatamen = async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json();
    var i = 2;

    for (i = 1; i < 5; i++) {
        var disco = 100 * (data.categories[0].category_products[`${i - 1}`].price / data.categories[0].category_products[`${i - 1}`].compare_at_price)



        document.getElementById(`tag${i}`).innerHTML = data.categories[0].category_products[`${i - 1}`].badge_text;
        document.getElementById(`img${i}`).src = data.categories[0].category_products[`${i - 1}`].image;
        document.getElementById(`name${i}`).innerHTML = data.categories[0].category_products[`${i - 1}`].title;
        document.getElementById(`vendor${i}`).innerHTML = data.categories[0].category_products[`${i - 1}`].vendor;
        document.getElementById(`new_price_${i}`).innerHTML = data.categories[0].category_products[`${i - 1}`].price;
        document.getElementById(`old_price_${i}`).innerHTML = data.categories[0].category_products[`${i - 1}`].compare_at_price;
        document.getElementById(`discount${i}`).innerHTML = disco.toFixed(0);
    }


    console.log(data);
}
const fetchdatawomen = async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json();
    var i = 2;

    for (i = 1; i < 5; i++) {
        var disco = 100 * (data.categories[1].category_products[`${i - 1}`].price / data.categories[1].category_products[`${i - 1}`].compare_at_price)



        document.getElementById(`tagw${i}`).innerHTML = data.categories[1].category_products[`${i - 1}`].badge_text;
        document.getElementById(`imgw${i}`).src = data.categories[1].category_products[`${i - 1}`].image;
        document.getElementById(`namew${i}`).innerHTML = data.categories[1].category_products[`${i - 1}`].title;
        document.getElementById(`vendorw${i}`).innerHTML = data.categories[1].category_products[`${i - 1}`].vendor;
        document.getElementById(`new_price_w${i}`).innerHTML = data.categories[1].category_products[`${i - 1}`].price;
        document.getElementById(`old_price_w${i}`).innerHTML = data.categories[1].category_products[`${i - 1}`].compare_at_price;
        document.getElementById(`discountw${i}`).innerHTML = disco.toFixed(0);
    }


    console.log(data);
}

const fetchdatakids = async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json();
    var i = 2;

    for (i = 1; i < 5; i++) {
        var disco = 100 * (data.categories[2].category_products[`${i - 1}`].price / data.categories[2].category_products[`${i - 1}`].compare_at_price)



        document.getElementById(`tagk${i}`).innerHTML = data.categories[2].category_products[`${i - 1}`].badge_text;
        document.getElementById(`imgk${i}`).src = data.categories[2].category_products[`${i - 1}`].image;
        document.getElementById(`namek${i}`).innerHTML = data.categories[2].category_products[`${i - 1}`].title;
        document.getElementById(`vendork${i}`).innerHTML = data.categories[2].category_products[`${i - 1}`].vendor;
        document.getElementById(`new_price_k${i}`).innerHTML = data.categories[2].category_products[`${i - 1}`].price;
        document.getElementById(`old_price_k${i}`).innerHTML = data.categories[2].category_products[`${i - 1}`].compare_at_price;
        document.getElementById(`discountk${i}`).innerHTML = disco.toFixed(0);
    }


    console.log(data);
}

fetchdatamen();
fetchdatawomen();
fetchdatakids();