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
