document.addEventListener('DOMContentLoaded', function() {
    // play video
    const playButtons = document.querySelectorAll('.play_video');
    const togglePlay = document.getElementById('togglePlay');
    const episode = document.getElementById('episode');
    const video = document.getElementById('video');

    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                togglePlay.classList.add('hide');
                episode.classList.add('hide');
            } else {
                video.pause();
                togglePlay.classList.remove('hide');
            }
        });
    });

    video.addEventListener('click', function() {
        if (!video.paused) {
            video.pause();
            togglePlay.classList.remove('hide');
        }
    });

    // animate
    const circles = document.querySelectorAll('.circle');
    document.addEventListener('mousemove', handleMouseMove);
    
    function handleMouseMove(event) {
        circles.forEach((circle, index) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
    
            const circleRect = circle.getBoundingClientRect();
            const circleX = circleRect.left + circleRect.width / 2;
            const circleY = circleRect.top + circleRect.height / 2;
    
            const deltaX = mouseX - circleX;
            const deltaY = mouseY - circleY;
    
            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
            const maxDistance = 100; 
    
            const scale = Math.min(1, maxDistance / distance);
    
            const translateX = scale * Math.cos(angle) * 10;
            const translateY = scale * Math.sin(angle) * 10;
    
            circle.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    }

    
    function animateElementsUp() {
        let elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function (element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (elementTop < (windowHeight - 100)) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    function animateElementsLeft() {
        let elements = document.querySelectorAll('.animate-on-scroll-left');
        elements.forEach(function (element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (elementTop < (windowHeight - 100)) {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
            }
        });
    }
    
    function animateElementsRight() {
        let elements = document.querySelectorAll('.animate-on-scroll-right');
        elements.forEach(function (element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (elementTop < (windowHeight - 100)) {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
            }
        });
    }
    
    function animateElementsDown() {
        let elements = document.querySelectorAll('.animate-on-scroll-down');
        elements.forEach(function (element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (elementTop < (windowHeight - 100)) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener("scroll", function () {
        animateElementsUp();
        animateElementsLeft();
        animateElementsRight();
        animateElementsDown();
    });
    
    animateElementsUp();
    animateElementsLeft();
    animateElementsRight();
    animateElementsDown();
});