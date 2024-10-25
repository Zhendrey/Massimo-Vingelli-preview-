import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

import { spoiler } from "./functions.js";
import { createScrollLines } from './functions.js';
// import Swiper from "swiper";
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

const buttons = document.querySelectorAll(".item-spoiler__button");
const buttonsImages = document.querySelectorAll(".item-spoiler__button img");
const invisibleContentElement = document.querySelectorAll(".item-spoiler__invisible-content");


spoiler(buttons, invisibleContentElement)


const burger = document.querySelector(".header__burger");
const timeLineSideBar = document.querySelector(".time-line");

burger.addEventListener("click", function(event) {
    burger.classList.toggle("active");
    timeLineSideBar.classList.toggle("active");
  })
  
  
  const spoilerButton_HEADER = document.querySelector("header .item-spoiler__button");
  const itemSpoiler = document.querySelector(".spoilers__item");
  const spoilerButton_SLIDER = itemSpoiler.querySelector(".item-spoiler__button");
  const headerSearch = document.querySelector(".header__search");
  const headerLogo = document.querySelector(".header__logo");
  
  
  // [...spoilerButton].forEach((button)=>{
    //   button.addEventListener("click", (event)=>{
      //     button.classList.toggle("active");
      //     headerSearch.classList.toggle("active");
      //     headerLogo.classList.toggle("active");
      //     itemSpoiler.classList.toggle("active");
      //   })
      //   })
      
      spoilerButton_HEADER.addEventListener("click", function(event) {
        spoilerButton_HEADER.classList.toggle("active");
        headerSearch.classList.toggle("active");
        headerLogo.classList.toggle("active");
      })
      
      spoilerButton_SLIDER.addEventListener("click", function(event) {
        spoilerButton_SLIDER.classList.toggle("active");
        itemSpoiler.classList.toggle("active");
      })
      
      window.addEventListener("click", function(event){
        // if(!event.target.closest(".header__burger")){
        //   burger.classList.remove("active")
        //   timeLineSideBar.classList.remove("active")
        // }
        // if(!event.target.closest('.header__burger')){
  //   timeLineSideBar.classList.remove('active')
  // }
})


const invisibleSwiper = new Swiper(".invisible-slider", {
  
  // If we need pagination
  
  navigation: {
    nextEl: '.swiper-button-next',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0,
  keyboard:{
    enabled: true,
    onlyViewport: false,
  }
})


const timeLine__swiper = new Swiper(".time-line__wrapper", {
    // If we need pagination
  
    navigation: {
      nextEl: '.swiper-button-next',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard:{
      enabled: true,
      onlyViewport: false,
    },
})


const scrollLines = document.querySelector(".scroll__lines");

createScrollLines(scrollLines, 7);