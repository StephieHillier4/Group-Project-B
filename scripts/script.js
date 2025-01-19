const btnNav = document.getElementById("nav-btn");
const navicon = document.getElementById("navicon");
const navPanel = document.querySelector(".site-nav-list");
const navHeader = document.querySelector(".site-nav");
const section = document.querySelectorAll(".section");
const article = document.querySelectorAll(".section div");
const footer = document.getElementById("site-footer");

// Toggle Navigation Menu
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

// Change color of navigation upon scrolling
// Filter values generated from https://cssfilterconverter.com/
// Referred to the following stackoverflow post for the changeColor() function
// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
const mainBody = document.getElementById("site-wrapper");
const colorChange = document.querySelectorAll(".colorChange");
const headerDesktop = document.querySelectorAll(".site-nav-top a");

mainBody.addEventListener("scroll", changeColor);

function changeColor() {
    const observer = new window.IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
                let currentSection = e.target.classList.value;
                let navName = e.target.classList[0];
                let activeSpanId = `nav-${navName}`;

                span.forEach((span) => {
                    span.style.opacity = "0";
                });
                document.getElementById(activeSpanId).style.opacity = "1.0";

                if (
                    currentSection.includes("home") ||
                    currentSection.includes("stay updated")
                ) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = `brightness(0) saturate(100%) invert(16%) sepia(59%) saturate(4955%) hue-rotate(223deg) brightness(90%) contrast(84%)`;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = `rgb(26, 73, 181)`;
                        });
                    }
                } else if (
                    currentSection.includes("about") ||
                    currentSection.includes("why")
                ) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(106%) contrast(101%)`;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = `rgb(255, 255, 255)`;
                        });
                    }
                } else if (currentSection.includes("design")) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = `brightness(0) saturate(100%) invert(7%) sepia(29%) saturate(945%) hue-rotate(184deg) brightness(94%) contrast(94%)`;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = `rgb(20, 24, 39)`;
                        });
                    }
                }
            }
        },
        { rootMargin: "0px 0px -50% 0px", threshold: 0.3 }
    );
    section.forEach((section) => {
        observer.observe(section);
    });

    const span = document.querySelectorAll("span");
    const sideNav = document.getElementById("side-nav");

    sideNav.addEventListener("mouseenter", function () {
        span.forEach((span) => {
            span.style.opacity = "0.8";
        });
    });

    sideNav.addEventListener("mouseleave", function () {
        span.forEach((span) => {
            if (span.id !== activeSpanId) {
                span.style.opacity = "0";
            }
        });
    });
}
