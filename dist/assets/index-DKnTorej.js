(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".blue-button-3").forEach(function(e){e.addEventListener("click",function(){switch(c(e),e.textContent.trim()){case"Yoga":d();break;case"Group":l();break;case"Solo":m();break;case"Stretching":p();break}})});const o=document.querySelector(".navbar-overlay");window.addEventListener("scroll",function(){window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")}),document.getElementById("height-input").addEventListener("input",s),document.getElementById("weight-input").addEventListener("input",s)});function c(t){var o=document.querySelectorAll(".blue-button-3");o.forEach(function(e){e.classList.remove("active-button")}),t.classList.add("active-button")}function d(){r("Yoga","images/yoga.jpg","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas accusantium molestiae illo hic? Commodi ducimus quo voluptatibus molestias ipsum nam dolorum quia dolor earum.","Saturday-Sunday: 8:00am - 10:00am","Monday-Tuesday: 10:00am - 12:00pm","Wednesday-Friday: 3:00pm - 6:00pm")}function l(){r("Group","images/group.webp","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum urna at quam viverra, a fermentum libero vulputate. Aliquam scelerisque urna est, ornare mollis urna.","Saturday-Sunday: 10:00am - 12:00am","Monday-Tuesday: 12:00am - 14:00pm","Wednesday-Friday: 14:00pm - 16:00pm")}function m(){r("Solo","images/solo.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum urna vitae dolor ornare ornare. Donec vulputate turpis sed interdum vulputate. Aenean consectetur arcu vel.","Saturday-Sunday: 12:00am - 14:00am","Monday-Tuesday: 14:00am - 16:30pm","Wednesday-Friday: 17:20pm - 19:30pm")}function p(){r("Stretching","images/stret.webp","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa nunc, volutpat sit amet arcu nec, finibus gravida nulla. Pellentesque habitant morbi tristique senectus et.","Saturday-Sunday: 18:00am - 20:00am","Monday-Tuesday: 20:00am - 20:30pm","Wednesday-Friday: 20:30pm - 22:30pm")}function r(t,o,e,i,n,a){document.getElementById("title-1").textContent=`Why are your ${t}?`,document.getElementById("content-1").textContent=e,document.getElementById("title-2").textContent=`When comes ${t} Your Time.`,document.getElementById("content-2").textContent=i,document.getElementById("content-3").textContent=n,document.getElementById("content-4").textContent=a,document.getElementById("image-1").src=o}function s(){const t=document.getElementById("height-input").value,o=document.getElementById("weight-input").value;if(t&&o){const e=t/100,i=o/(e*e);y(i)}}function y(t){const o=document.getElementById("triangle");let e=0;t<18.5?e=-345:t>=18.5&&t<=24.9?e=-115:t>=25&&t<=29.9?e=125:t>=30&&t<=34.9?e=365:t>=35&&(e=595),o.style.transform=`translateX(${e}%)`}