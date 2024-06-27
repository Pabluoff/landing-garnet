document.addEventListener('DOMContentLoaded', function () {
    const btnBuyFix = document.querySelector('.btn-buy-fix');
    const pricingSection = document.querySelector('.pricing');
    const heroSection = document.querySelector('.hero');
    const guaranteeSection = document.querySelector('.guarantee'); 

    function toggleButtonVisibility() {
        const pricingSectionRect = pricingSection.getBoundingClientRect();
        const heroSectionRect = heroSection.getBoundingClientRect();
        const guaranteeSectionRect = guaranteeSection.getBoundingClientRect(); 
        const windowHeight = window.innerHeight;
        const pricingVisible = (pricingSectionRect.top < windowHeight && pricingSectionRect.bottom > 0);
        const heroVisible = (heroSectionRect.top < windowHeight && heroSectionRect.bottom > 0);
        const guaranteeVisible = (guaranteeSectionRect.top < windowHeight && guaranteeSectionRect.bottom > 0);
        if (pricingVisible || heroVisible || guaranteeVisible) {
            btnBuyFix.classList.remove('visible');
        } else {
            btnBuyFix.classList.add('visible');
        }
    }

    window.addEventListener('scroll', toggleButtonVisibility);
    window.addEventListener('resize', toggleButtonVisibility);

    toggleButtonVisibility();
});

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherQuestion.classList.remove('active');
                otherItem.classList.remove('active');
                otherAnswer.style.maxHeight = null;
                otherAnswer.style.padding = '0 20px';
            });

            if (!isActive) {
                question.classList.add('active');
                item.classList.add('active');
                answer.style.maxHeight = (answer.scrollHeight + 20) + 'px';
                answer.style.padding = '10px 20px 20px';
            }
        });
    });
});

$(document).ready(function () {
    $('.testimonials-container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.prev').click(function () {
        $('.testimonials-container').slick('slickPrev');
    });

    $('.next').click(function () {
        $('.testimonials-container').slick('slickNext');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const notification = document.getElementById('sale-notification');
    const buyerCount = document.getElementById('buyer-count');
    let startDragY = 0;
    let offsetTop = 0;

    function getRandomBuyers() {
        return Math.floor(Math.random() * 15) + 5;
    }

    function showNotification() {
        buyerCount.textContent = getRandomBuyers();
        notification.classList.add('visible');
        
        setTimeout(() => {
            notification.classList.remove('visible');
        }, 5000); 
    }

    function scheduleNotification() {
        setTimeout(() => {
            showNotification();
            scheduleNotification();
        }, Math.random() * 15000 + 15000); 
    }

    showNotification();
    scheduleNotification();

    // Mouse drag events
    notification.addEventListener('mousedown', startDrag);
    notification.addEventListener('mousemove', drag);
    notification.addEventListener('mouseup', endDrag);
    notification.addEventListener('mouseleave', endDrag);

    function startDrag(event) {
        startDragY = event.clientY;
        offsetTop = parseInt(window.getComputedStyle(notification).top);
        notification.style.cursor = 'grabbing';
    }

    function drag(event) {
        if (startDragY !== 0) {
            const deltaY = event.clientY - startDragY;
            notification.style.top = `${offsetTop + deltaY}px`;
        }
    }

    function endDrag(event) {
        startDragY = 0;
        notification.style.cursor = 'grab';
        if (parseInt(notification.style.top) < -50) {
            notification.classList.remove('visible');
        } else {
            notification.style.top = '20px';
        }
    }

    // Touch events for mobile
    let touchStartY = 0;
    let touchMoveY = 0;

    notification.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
        offsetTop = parseInt(window.getComputedStyle(notification).top);
        notification.style.cursor = 'grabbing';
    });

    notification.addEventListener('touchmove', function(e) {
        touchMoveY = e.touches[0].clientY;
        const deltaY = touchMoveY - touchStartY;
        notification.style.top = `${offsetTop + deltaY}px`;
    });

    notification.addEventListener('touchend', function(e) {
        if (touchMoveY < touchStartY - 50) {
            notification.classList.remove('visible');
        } else {
            notification.style.top = '20px';
        }
        notification.style.cursor = 'grab';
    });
});
