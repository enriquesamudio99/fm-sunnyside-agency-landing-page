const togglerBtn = document.querySelector('#togglerBtn');
const nav = document.querySelector('#nav');

document.addEventListener("DOMContentLoaded", () => {

    togglerBtn.addEventListener("click", () => {
        togglerBtn.classList.toggle("navbar__toggler--active");
        nav.classList.toggle("nav--active");
    });

});