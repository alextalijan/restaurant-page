import { homePageLoad } from "./initial-page-load.js";
import { menuPageLoad } from "./menu-page-load.js";
import { aboutPageLoad } from "./about-page-load.js";
import "./styles.css";

homePageLoad();

// When a navigation button is clicked, relevant page is shown
const homeBtn = document.querySelector(".home-nav");
const menuBtn = document.querySelector(".menu-nav");
const aboutBtn = document.querySelector(".about-nav");

homeBtn.addEventListener("click", () => {
    homePageLoad();
});

menuBtn.addEventListener("click", () => {
    menuPageLoad();
});

aboutBtn.addEventListener("click", () => {
    aboutPageLoad();
});