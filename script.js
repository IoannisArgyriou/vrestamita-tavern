
const burgerIcon = document.querySelector(".burger-icon");
const bMenu = document.querySelector("#b-menu");
const menuIcon = document.querySelector(".burger-icon i");
const menuLinks = document.querySelectorAll("#b-menu a");
let lastScrollY = window.scrollY;

burgerIcon.addEventListener("click", () => {
    bMenu.classList.toggle("active");

    if (bMenu.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});



menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        bMenu.classList.remove("active");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
});

window.addEventListener("scroll", ()=> {
    const bNav = document.querySelector(".b-nav");
    const navCon = document.querySelector(".nav-container");

    if(window.scrollY > 50) {
        bNav.classList.add("scrolled");
        navCon.classList.add("scrolled");

        if(window.scrollY > lastScrollY) {
            //wen scrolling down
            navCon.classList.add("hidden");
        } else {
            //when scrolling up
            navCon.classList.remove("hidden");
        }
    } else {
        bNav.classList.remove("scrolled");
        navCon.classList.remove("scrolled");

        bNav.classList.remove("hidden");
        navCon.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
});

window.addEventListener("resize", ()=> {
    if(window.innerWidth > 1100) {
        bMenu.classList.remove("active");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});