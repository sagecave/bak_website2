document.getElementById('mobile-menu').addEventListener('click', function () {
    let menu = document.getElementById('burger-menu');
    menu.classList.toggle('menu-open');
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    let nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.burger-menu a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('backgroundVideo');
  
    // Set the video source to your video file
    video.src = './video/lilleVideo.mp4';
  
    // Play the video
    video.play();
  });  











function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function () {
    toggleScrollTopButton();
};

function toggleScrollTopButton() {
    let button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}



