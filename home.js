

// Animated Carousel

const scrollers = document.querySelectorAll('.top-carousel');
const botscrollers = document.querySelectorAll('.bottom-carousel');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    addAnimation2();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const innerScroller = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            innerScroller.appendChild(duplicatedItem);
        }) 
    });
}



function addAnimation2() {
    botscrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const innerScroller = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            innerScroller.appendChild(duplicatedItem);
        }) 
    });
}




// Clicking Carousel Account Features

const track2 = document.querySelector('.inner-panel2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.panel2-btn-right');
const prevButton2 = document.querySelector('.panel2-btn-left');
const mq900nextButton2 = document.querySelector('.mq900-panel2-btn-right');
const mq900prevButton2 = document.querySelector('.mq900-panel2-btn-left');
const slideWidth2 = slides2[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition2 = (slide, index) => {
    slide.style.left = slideWidth2 * index * 1.5 + 'px';
}

slides2.forEach(setSlidePosition2);
window.addEventListener('resize', function() {
    const slideWidth2 = slides2[0].getBoundingClientRect().width;

    const setSlidePosition2 = (slide, index) => {
        slide.style.left = slideWidth2 * index * 1.5 + 'px';
    }
    slides2.forEach(setSlidePosition2);

    const currentSlide = track2.querySelector('.current-slide2');
    adjustSlideContainer(track2, currentSlide);
})

//

const moveToSlide2 = (track2, currentSlide, targetSlide) => {
    track2.style.transition = 'transform 400ms ease-in';
    track2.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide2');
    targetSlide.classList.add('current-slide2');
}
const adjustSlideContainer = (track2, targetSlide) => {
    track2.style.transition = 'none';
    track2.style.transform = 'translateX(-' + targetSlide.style.left + ')';
}
const hideShowArrows2 = (slides, prevButton2, nextButton2, targetIndex) => {
    if (targetIndex === 0) {
        prevButton2.classList.add('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
        mq900prevButton2.classList.add('is-hidden2');
        mq900nextButton2.classList.remove('is-hidden2');
    } else if (targetIndex === slides.length - 1) {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.add('is-hidden2');
        mq900prevButton2.classList.remove('is-hidden2');
        mq900nextButton2.classList.add('is-hidden2');
    } else {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
        mq900prevButton2.classList.remove('is-hidden2');
        mq900nextButton2.classList.remove('is-hidden2');
    }
}
//WIDE SCREEN BUTTONS
// when i click right, move slides to the right
nextButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides2.findIndex(slide => slide === nextSlide)

    moveToSlide2(track2, currentSlide, nextSlide);
    hideShowArrows2(slides, prevButton2, nextButton2, nextIndex);
});
//when i click left, move slides to the left
prevButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides2.findIndex(slide => slide === prevSlide)

    moveToSlide2(track2, currentSlide, prevSlide);
    hideShowArrows2(slides, prevButton2, nextButton2, prevIndex);
})

//THIN SCREEN BUTTONS
// when i click right, move slides to the right
mq900nextButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides2.findIndex(slide => slide === nextSlide)

    moveToSlide2(track2, currentSlide, nextSlide);
    hideShowArrows2(slides, prevButton2, nextButton2, nextIndex);
});
//when i click left, move slides to the left
mq900prevButton2.addEventListener('click', e => {
    const currentSlide = track2.querySelector('.current-slide2');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides2.findIndex(slide => slide === prevSlide)

    moveToSlide2(track2, currentSlide, prevSlide);
    hideShowArrows2(slides, prevButton2, nextButton2, prevIndex);
})


// Clicking Carousel Reviews

const track = document.querySelector('.inner-panel');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.panel-btn-right');
const prevButton = document.querySelector('.panel-btn-left');
const dotsNav = document.querySelector('.panel-nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

window.addEventListener('resize', function() {
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition);

    const currentSlide = track.querySelector('.current-slide');
    adjustSlideContainer(track, currentSlide);
})

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transition = 'transform 250ms ease-in';
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const adjustSlideContainer2 = (track, targetSlide) => {
    track.style.transition = 'none';
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
}
const updateDots = (currentDot, targetDot) => {
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
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// when i click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


//when i click the panel-indicators, move to that slide
dotsNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})





const pp50s = document.querySelectorAll('svg.pp50');
const pp_40s = document.querySelectorAll('svg.pp-40');
const pp_130s = document.querySelectorAll('svg.pp-130');
const pp140s = document.querySelectorAll('svg.pp140');
const config1 = {
    root: null,
    rootMargin: '0px',
    threshold: .5
};
const config2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}


const observer50in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < pp50s.length; i++) {
                pp50s[i].classList.add('pp-animation50');
                pp50s[i].classList.remove('hidden');
            }
            
        } /* else {
            for (let i = 0; i < pp50s.length; i++) {
                pp50s[i].classList.remove('pp-animation50');
                pp50s[i].classList.add('hidden');
            } 
        } */
        
    })
}, config1)
observer50in.observe(document.querySelector('.s5-wrapper'));
const observer50out = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting != true) {
            for (let i = 0; i < pp50s.length; i++) {
                pp50s[i].classList.remove('pp-animation50');
                pp50s[i].classList.add('hidden');
            }
            
        }
    })
}, config2)
observer50out.observe(document.querySelector('.s5-wrapper'));


const observer_40in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < pp_40s.length; i++) {
                pp_40s[i].classList.add('pp-animation-40');
                pp_40s[i].classList.remove('hidden');
            }
        } /*else {
            for (let i = 0; i < pp_40s.length; i++) {
                pp_40s[i].classList.remove('pp-animation-40');
                pp_40s[i].classList.add('hidden');
            }
        } */
    })
    
}, config1)
observer_40in.observe(document.querySelector('.s5-wrapper'));
const observer_40out = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting != true) {
            for (let i = 0; i < pp_40s.length; i++) {
                pp_40s[i].classList.remove('pp-animation-40');
                pp_40s[i].classList.add('hidden');
            }
        }
    })
    
}, config2)
observer_40out.observe(document.querySelector('.s5-wrapper'));


const observer_130in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < pp_130s.length; i++) {
                pp_130s[i].classList.add('pp-animation-130');
                pp_130s[i].classList.remove('hidden');
            }
        } /* else {
            for (let i = 0; i < pp_130s.length; i++) {
                pp_130s[i].classList.remove('pp-animation-130');
                pp_130s[i].classList.add('hidden');
            }
        } */
    })
}, config1)
observer_130in.observe(document.querySelector('.s5-wrapper'));
const observer_130out = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting != true) {
            for (let i = 0; i < pp_130s.length; i++) {
                pp_130s[i].classList.remove('pp-animation-130');
                pp_130s[i].classList.add('hidden');
            }
        }
    })
}, config2)
observer_130out.observe(document.querySelector('.s5-wrapper'));


const observer140in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < pp140s.length; i++) {
                pp140s[i].classList.add('pp-animation140');
                pp140s[i].classList.remove('hidden');
            }
        } /* else {
            for (let i = 0; i < pp140s.length; i++) {
                pp140s[i].classList.remove('pp-animation140');
                pp140s[i].classList.add('hidden');
            }
        } */
    })
}, config1)
observer140in.observe(document.querySelector('.s5-wrapper'));
const observer140out = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting != true) {
            for (let i = 0; i < pp140s.length; i++) {
                pp140s[i].classList.remove('pp-animation140');
                pp140s[i].classList.add('hidden');
            }
        }
    })
}, config2)
observer140out.observe(document.querySelector('.s5-wrapper'));




// s1 Infinite Clicking Carousel//

let mql = window.matchMedia('(max-width: 400px)');

const snippets = document.querySelectorAll('.hidden-snippets2-inner-panel > div');
const inner_slider = document.querySelector('.hidden-snippets2-inner-panel');
const prevBtn = document.querySelector('.upBtn');
const nextBtn = document.querySelector('.downBtn');

let snippetSize = snippets[0].clientHeight
inner_slider.style.transform = `translateY(${-snippetSize}px)`;

let current = 1;


function addListeners() {
    prevBtn.addEventListener('click', moveSlidePrev);
    nextBtn.addEventListener('click', moveSlideNext);
    inner_slider.addEventListener('transitionend', resetSlide);
}
function moveSlidePrev() {
    let snippetSize = snippets[0].clientHeight
    if (current <= 0) return;
    inner_slider.style.transition = 'transform 200ms ease-in-out';
    current--;
    inner_slider.style.transform = `translateY(${-snippetSize * current}px)`;
    console.log(current);
}
function moveSlideNext() {
    let snippetSize = snippets[0].clientHeight
    if (current >= snippets.length - 1) return;
    inner_slider.style.transition = 'transform 200ms ease-in-out';
    current++;
    inner_slider.style.transform = `translateY(${-snippetSize * current}px)`;
    console.log(current);
}
function resetSlide() {
    let snippetSize = snippets[0].clientHeight
    if (snippets[current].classList.contains('first-snip')) {
        inner_slider.style.transition = 'none';
        current = snippets.length - 2;
        inner_slider.style.transform = `translateY(${-snippetSize * current}px)`;
    } else if (snippets[current].classList.contains('last-snip')) {
        inner_slider.style.transition = 'none';
        current = snippets.length - current;
        inner_slider.style.transform = `translateY(${-snippetSize * current}px)`;
    }
}
function removeListeners() {
    prevBtn.removeEventListener('click', moveSlidePrev);
    nextBtn.removeEventListener('click', moveSlideNext);
    inner_slider.removeEventListener('transitionend', resetSlide);
}
addListeners();

function render(mql) {
    
    let snippetSize = snippets[0].clientHeight
    inner_slider.style.transform = `translateY(${-snippetSize * current}px)`;

    if (mql.matches) {
        
        removeListeners();
        addListeners();
        
        console.log(current);
        console.log('This is if');   
    } else {
        removeListeners();
        
        inner_slider.style.transition = 'none';
        console.log(current);
        console.log('This is else');
    }
}

mql.addEventListener('change', render);
