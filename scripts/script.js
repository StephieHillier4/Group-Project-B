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

    // Change opacity of the main sections upon navigation toggle
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

    // Push the footer to the right upon navigation toggle
    footer.classList.toggle("pushed");
});

// Change color of navigation upon scrolling
// Filter values generated from https://cssfilterconverter.com/
// Referred to the following stackoverflow post for the changeColor() function
// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
const mainBody = document.getElementById("site-wrapper");
const colorChange = document.querySelectorAll(".colorChange");
const headerDesktop = document.querySelectorAll(".site-nav-top a");
const span = document.querySelectorAll("span");
const sideNav = document.getElementById("side-nav");

// Color Variables
const blueFilter = `brightness(0) saturate(100%) invert(16%) sepia(59%) saturate(4955%) hue-rotate(223deg) brightness(90%) contrast(84%)`;
const blueColor = `rgb(26, 73, 181)`;
const whiteFilter = `brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(106%) contrast(101%)`;
const whiteColor = `rgb(255, 255, 255)`;
const navyFilter = `brightness(0) saturate(100%) invert(7%) sepia(29%) saturate(945%) hue-rotate(184deg) brightness(94%) contrast(94%)`;
const navyColor = `rgb(20, 24, 39)`;

let activeSpanId;

mainBody.addEventListener("scroll", changeColor);

function changeColor() {
    const observer = new window.IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
                // Highlight the name of the currently displayed section in the side nav
                let currentSection = e.target.classList.value;
                let navName = e.target.classList[0];
                activeSpanId = `nav-${navName}`;

                span.forEach((span) => {
                    span.style.opacity = "0";
                });
                document.getElementById(activeSpanId).style.opacity = "1.0";

                // Change the color of the navigation menus based on the currently displayed section
                if (
                    currentSection.includes("home") ||
                    currentSection.includes("stay-updated")
                ) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = blueFilter;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = blueColor;
                        });
                    }
                } else if (
                    currentSection.includes("about") ||
                    currentSection.includes("why")
                ) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = whiteFilter;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = whiteColor;
                        });
                    }
                } else if (currentSection.includes("design")) {
                    colorChange.forEach((colorChange) => {
                        colorChange.style.filter = navyFilter;
                    });

                    if (window.innerWidth >= 768) {
                        headerDesktop.forEach((headerDesktop) => {
                            headerDesktop.style.color = navyColor;
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

    // Make the entire side nav visible upon hovering over the area
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
