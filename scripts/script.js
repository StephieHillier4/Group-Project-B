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
