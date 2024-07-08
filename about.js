const accordion = document.querySelector('.about-accordion');


accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordion-panel');
    if (!activePanel) return;
    toggleAccordion(activePanel);
})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll('button');
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');

    buttons.forEach(button => {
        button.setAttribute('aria-expanded', false);
    })
    contents.forEach(content => {
        content.setAttribute('aria-hidden', true);
    })

    panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
}

/* About Page - Company Timeline carousel */

const track = document.querySelector('.swiper-container');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.arrow-btn-right');
const prevButton = document.querySelector('.arrow-btn-left');
const datesNav = document.querySelector('.year-listing');
const dates = Array.from(datesNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const marginRight = "25";
const doubleMarginRight = "52";
const setSlidePosition = (slide, index) => {
    if (index > 0 && index < 2) {
        slide.style.left = slideWidth * index + parseInt(marginRight) + 'px';
    } else if (index >= 2) {
        slide.style.left = slideWidth * index + (parseInt(marginRight) * index) + 'px';
    } else {
        slide.style.left = slideWidth * index + 'px';
    }
}
slides.forEach(setSlidePosition);
window.addEventListener("resize", function() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    

    const setSlidePosition = (slide, index) => {
        if (index > 0 && index < 2) {
            slide.style.left = slideWidth * index + parseInt(marginRight) + 'px';
        } else if (index >= 2) {
            slide.style.left = slideWidth * index + (parseInt(marginRight) * index) + 'px';
        } else {
            slide.style.left = slideWidth * index + 'px';
        }
    }
    slides.forEach(setSlidePosition);

    const currentSlide = track.querySelector('.current-slide');
    adjustSlide(track, currentSlide);
})



const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transition = 'transform .3s ease-in';
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const adjustSlide = (track, targetSlide) => {
    track.style.transition = 'none';
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
}
const updateDates = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//when i click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = datesNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide);
    updateDates(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// when i click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = datesNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    moveToSlide(track, currentSlide, nextSlide);
    updateDates(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


//when i click the panel-indicators, move to that slide
datesNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('li');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = datesNav.querySelector('.current-slide');
    const targetIndex = dates.findIndex(date => date === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    updateDates(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})
