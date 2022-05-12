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

window.onscroll = () => {
    let myButton = document.getElementById("myBtn");
    myButton.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
        "block" : "none";
};

$('#myBtn').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
});

let navElements = [{nameLink: "Головна"}, {nameLink: "Корисне"}, {nameLink: "Контакти"}];
let navMenu = document.getElementById("nav_menu");
for (let elem of navElements) {
    let menuItem = "<li>" +
        "           <a href=\"#\" class=\"header_link\">" + elem.nameLink + "</a>" +
        "           </li>";
    navMenu.insertAdjacentHTML("beforeend", menuItem);
}
