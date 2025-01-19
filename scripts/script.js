const btnNav = document.getElementById("nav-btn");
const navicon = document.getElementById("navicon");
const navPanel = document.querySelector(".site-nav-list");
const navHeader = document.querySelector(".site-nav");
const section = document.querySelectorAll(".section");
const article = document.querySelectorAll(".section div");
const footer = document.getElementById("site-footer");

btnNav.addEventListener("click", function () {
    navPanel.classList.toggle("toggled");
    navHeader.classList.toggle("toggled");
    if (navHeader.classList.contains("toggled")) {
        navicon.src = "images/arrow-left.svg";
        navicon.classList.add("colorChange");
    } else if (!navHeader.classList.contains("toggled")) {
        navicon.src = "images/hamburger-icon.svg";
    }

    section.forEach((section) => {
        section.classList.toggle("pushed");
        if (section.classList.contains("pushed")) {
            article.forEach((article) => {
                article.style.opacity = "0.5";
            });
        } else if (!section.classList.contains("pushed")) {
            article.forEach((article) => {
                article.style.opacity = "1";
            });
        }
    });
    footer.classList.toggle("pushed");
});

// Change color of navigation
// Filter values generated from https://cssfilterconverter.com/
const mainBody = document.getElementById("site-wrapper");
const colorChange = document.querySelectorAll(".colorChange");
const headerDesktop = document.querySelectorAll(".site-nav-top a");

if (window.innerWidth < 768) {
    mainBody.addEventListener("scroll", mobileChangeColor);
} else {
    mainBody.addEventListener("scroll", desktopChangeColor);
}

function mobileChangeColor(e) {
    let pageTop = e.currentTarget.scrollTop;
    if (pageTop >= 0 && pageTop < 500) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(16%) sepia(59%) saturate(4955%) hue-rotate(223deg) brightness(90%) contrast(84%)`;
        });
    }
    if (pageTop >= 500 && pageTop < 2351) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(106%) contrast(101%)`;
        });
    } else if (pageTop >= 2351) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(7%) sepia(29%) saturate(945%) hue-rotate(184deg) brightness(94%) contrast(94%)`;
        });
    }
}

function desktopChangeColor(e) {
    let pageTop = e.currentTarget.scrollTop;
    if ((pageTop >= 0 && pageTop < 500) || pageTop >= 2298) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(16%) sepia(59%) saturate(4955%) hue-rotate(223deg) brightness(90%) contrast(84%)`;
        });
        headerDesktop.forEach((headerDesktop) => {
            headerDesktop.style.color = `rgb(26, 73, 181)`;
        });
    }
    if (pageTop >= 500 && pageTop < 1541.5) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(106%) contrast(101%)`;
        });
        headerDesktop.forEach((headerDesktop) => {
            headerDesktop.style.color = `rgb(255, 255, 255)`;
        });
    } else if (pageTop >= 1541.5 && pageTop < 2298) {
        colorChange.forEach((colorChange) => {
            colorChange.style.filter = `brightness(0) saturate(100%) invert(7%) sepia(29%) saturate(945%) hue-rotate(184deg) brightness(94%) contrast(94%)`;
        });
        headerDesktop.forEach((headerDesktop) => {
            headerDesktop.style.color = `rgb(20, 24, 39)`;
        });
    }
}
