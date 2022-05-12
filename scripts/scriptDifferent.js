"use strict"
let arrIcons = [{href: "https://www.facebook.com/", clas: "fa-facebook-f"},
    {href: "https://www.instagram.com/", clas: "fa-instagram"},
    {href: "https://www.twitter.com/", clas: "fa-twitter"},
    {href: "https://www.youtube.com/", clas: "fa-youtube"},
    {href: "https://web.telegram.org/k/", clas: "fa-telegram"},
];
let icons = document.getElementById("iconsJs")

for (let arrIcon of arrIcons) {
    let tegA = document.createElement("a");
    tegA.setAttribute("href", arrIcon.href);
    tegA.setAttribute("class", "fa-brands " + arrIcon.clas);
    tegA.setAttribute("target", "_blank")
    icons.appendChild(tegA);
}

$(document).ready(() => {
    $('.header_burger').click(() => {
        $('.header_burger, .menu').toggleClass('active');
    });
});

let myButton = document.getElementById("myBtn");
window.onscroll = () => {
    scrollFunction()
};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

let duration_ms = 800;
$('#myBtn').click(() => {
    $('html, body').animate({scrollTop: 0}, duration_ms);
});

let navElements = [{nameLink: "Головна"}, {nameLink: "Корисне"}, {nameLink: "Контакти"}];
let navMenu = document.getElementById("nav_menu");
for (let i = 0; i < navElements.length; i++) {
    let htmlCode = "<li>" +
        "           <a href=\"#\" class=\"header_link\">" + navElements[i].nameLink + "</a>" +
        "           </li>";
    navMenu.insertAdjacentHTML("beforeend", htmlCode);
}