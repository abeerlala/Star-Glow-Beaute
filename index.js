document.getElementById('check-icon').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

// AOS Initialization

AOS.init();