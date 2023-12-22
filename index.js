document.addEventListener("DOMContentLoaded", function () {
    
    const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarSticky = document.getElementById('navbar-sticky');

    
    mobileMenuButton.addEventListener('click', function () {
        navbarSticky.classList.toggle('hidden');
    });
});

const date= document.getElementById("date");


const currentDate = new Date();
let year = currentDate.getFullYear();

date.innerText="©"+year+" All rights reserved";