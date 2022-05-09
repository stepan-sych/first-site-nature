"use strict"
let arrIcons = [{href: "https://www.facebook.com/", class: "fa-brands fa-facebook-f"},
    {href: "https://www.instagram.com/", class: "fa-brands fa-instagram"},
    {href: "https://www.twitter.com/", class: "fa-brands fa-twitter"},
    {href: "https://www.youtube.com/", class: "fa-brands fa-youtube"},
    {href: "https://web.telegram.org/k/", class: "fa-brands fa-telegram"},
];
let icons = document.getElementById("iconsJs")

for (let arrIcon of arrIcons) {
    let tegA = document.createElement("a");
    tegA.setAttribute("href", arrIcon.href);
    tegA.setAttribute("class", arrIcon.class);
    tegA.setAttribute("target", "_blank")
    icons.appendChild(tegA);
}
/*------------------------------------------------*/
$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .menu').toggleClass('active');
    });
});
/*----------------------------------------*/
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


let duration_ms = 800;
$('#myBtn').click(function () {
    // let last_scroll = $(window).scrollTop();
    $('html, body').animate({scrollTop: 0}, duration_ms);
});
/*----------------------------------------------------------------*/
// Скрипт оформлення карток на сайті
let elementsCards = [{
    srcImage: "/image/cascade-7152189_960_720.jpg",
    title: " Водоспади",
    paragraf: "Падіння водного потоку річки з уступу; гідрологічний об'єкт, створений постійним водним потоком," +
        " зазвичай річки, який спадає зі стійкого до ерозії кам'яного уступу. Водоспади можуть бути також штучними," +
        " коли їх створюють як частину садово-паркового мистецтва",
    categoryText: "Опис природи",
    eye: "fa-regular fa-eye"
},
    {
        srcImage: "/image/beach-g07393b4f7_1280.jpg",
        title: " Моря",
        paragraf: "Частина океану, яка відокремлена від нього суходолом, підвищеннями підводного рельєфу або островами" +
            " і має своєрідний гідрометеорологічний режим, вирізняється властивостями та складом води (солоністю," +
            " прозорістю, температурою, біологічним складом). ",
        categoryText: "Опис природи",
        eye: "fa-regular fa-eye"
    },
    {
        srcImage: "/image/trees-gce4bd1088_1920.jpg",
        title: " Ліси",
        paragraf: "Це сукупність землі, рослинності, в якій переважають дерева та чагарники, тварини, мікроорганізми" +
            " та інші природні складові, що в своєму розвитку біологічно взаємопов'язані, впливають одна на одну і на довкілля.",
        categoryText: "Опис природи",
        eye: "fa-regular fa-eye"
    }, {
        srcImage: "/image/desert-gc14c75a5f_1280.jpg",
        title: " Пустелі",
        paragraf: "Тип ландшафту, що характеризується рівнинною поверхнею, розрідженістю або абсолютною відсутністю" +
            " флори, а з фауни присутні лише специфічні та притаманні лише їй види.",
        categoryText: "Опис природи",
        eye: "fa-regular fa-eye"
    }, {
        srcImage: "/image/mountains-g6eebdf700_1920.jpg",
        title: " Гори",
        paragraf: "Форма рельєфу, різке локальне ізольоване піднесення земної поверхні над сусідніми відносно" +
            " вирівняними ділянками, що характеризується чіткою лінією підошви.",
        categoryText: "Опис природи",
        eye: "fa-regular fa-eye"
    }, {
        srcImage: "/image/river-gda8efc3a4_1280.jpg",
        title: " Ріки",
        paragraf: "Природний водний потік (водотік), який витікає з джерела, озера чи болота (рідше), має власне" +
            " сформоване річище і тече під дією сили тяжіння; живиться поверхневими й підземними водами, а також" +
            " атмосферними опадами свого сточища (басейну).",
        categoryText: "Опис природи",
        eye: "fa-regular fa-eye"
    },
];

let cardsBox = document.getElementById("cards_box");

for (let element of elementsCards) {
    console.log("element");
    console.log(element.srcImage);
    let htmlCode = " <div class=\"cards_block\">\n" +
        "            <div class=\"image_cards\">\n" +
        "                <img src=" + element.srcImage + " alt=\"\">\n" +
        "            </div>\n" +
        "            <div class=\"cards_title\">\n" +
        "                <a href=\"#\"><span><h2 class=\"fa-regular fa-clipboard\">" + element.title + "</h2></span></a>\n" +
        "            </div>\n" +
        "            <div class=\"text_cards\">\n" +
        "                <p>" + element.paragraf + "</p>\n" +
        "            </div>\n" +
        "            <div class=\"category\">\n" +
        "                <a href=\"#\"><span>Опис природи</span></a>\n" +
        "                <span><i class=\"fa-regular fa-eye\"></i></span>\n" +
        "            </div>";
    cardsBox.insertAdjacentHTML("beforeend", htmlCode);
}
/*---------------------------------------------------------------*/
// function EnableDisable(name) {
//     let submitBtn = document.getElementById("submitBtn");
//
//     if (name.value.trim() !== '') {
//         submitBtn.disabled = false;
//     } else {
//         submitBtn.disabled = true;
//     }
// }s
function EnableDisable() {
    let elements = document.querySelectorAll("#name, #mail, #phone");
    let submitBtn = document.getElementById("submitBtn");
    let nameInput = document.getElementById("name");
    let mailInput = document.getElementById("mail");
    let phoneInput = document.getElementById("phone");
    submitBtn.disabled = true;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("keyup", function () {
            if (nameInput.value.replace(/\s+/g, '') !== "" && mailInput.value.replace(/\s+/g, '') !== "" && phoneInput.value.replace(/\s+/g, '') !== "") {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            form.submit();
        } else {
        }
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_name')) {
                if (nameTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_tel')) {
                if (telNumTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    const formAddError = (input) => {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    const formRemoveError = (input) => {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    const emailTest = (input) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const nameTest = (input) => {
        return /^[0-9,!@#$%^&*)(_/?\-=.`'"|~\]\[₴№;:}{\\]/.test(input.value);
    }

    const telNumTest = (input) => {
        return !/^[0-9]*$/.test(input.value);
    }
});



 




