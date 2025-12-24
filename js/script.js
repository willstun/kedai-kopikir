// document.addEventListener('DOMContentLoaded', function() {
//     const navbarNav = document.querySelector('.navbar-nav');
//     const hamburgerMenu = document.querySelector('#hamburger-menu');

//     if (hamburgerMenu && navbarNav) {
//         hamburgerMenu.addEventListener('click', function(e) {
//             e.preventDefault(); // mencegah scroll ke atas
//             navbarNav.classList.toggle('active');
//         });
//     }
// });

// Ambil elemen penting
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Klik hamburger → toggle menu
hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    navbarNav.classList.toggle('active');
});

// Klik di luar menu & hamburger → tutup menu
document.addEventListener('click', function (e) {
    if (
        !navbarNav.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navbarNav.classList.remove('active');
    }
});
