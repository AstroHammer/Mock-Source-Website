const firstResult = document.querySelectorAll('.first-result');
const secondResult = document.querySelectorAll('.second-result');
const thirdResult = document.querySelectorAll('.third-result');
const fourthResult = document.querySelectorAll('.fourth-result');
const fifthResult = document.querySelectorAll('.fifth-result');

const teamSections = document.querySelectorAll('.team-section-container');
const teamSectionWrapper = document.querySelectorAll('.team-section-wrapper');

document.addEventListener("DOMContentLoaded", function () {


if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let sectionHeight = teamSections[0].getBoundingClientRect().height;
    const setSectionHeight = (div) => {
        div.style.height = sectionHeight + 'px';
        
    }
    teamSections.forEach(setSectionHeight);

    firstResult[0].classList.add('hidden');
    firstResult[1].classList.add('hidden');
    secondResult[1].classList.add('hidden');
    secondResult[0].classList.add('hidden');
    thirdResult[0].classList.add('hidden');
    thirdResult[1].classList.add('hidden');
    fourthResult[1].classList.add('hidden');
    fourthResult[0].classList.add('hidden');
    fifthResult[0].classList.add('hidden');
    fifthResult[1].classList.add('hidden');
}
});
window.addEventListener('resize', function() {
    let sectionHeight = teamSections[0].getBoundingClientRect().height;
    
    const setSectionHeight = (section) => {
        section.style.height = sectionHeight + '%';
    }
    teamSections.forEach(setSectionHeight);
});


const config1 = {
    root: null,
    rootMargin: '0px',
    threshold: .5
};

const firstTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            firstResult[0].classList.remove('hidden');
            firstResult[1].classList.remove('hidden');
            firstResult[0].classList.add('tbl-animation');
            firstResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
firstTeamObserver.observe(teamSectionWrapper[0]);

const secondTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondResult[0].classList.remove('hidden');
            secondResult[1].classList.remove('hidden');
            secondResult[0].classList.add('ibl-animation');
            secondResult[1].classList.add('tbr-animation');
        }
    })
}, config1)
secondTeamObserver.observe(teamSectionWrapper[1]);

const thirdTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            thirdResult[0].classList.remove('hidden');
            thirdResult[1].classList.remove('hidden');
            thirdResult[0].classList.add('tbl-animation');
            thirdResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
thirdTeamObserver.observe(teamSectionWrapper[2]);

const fourthTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fourthResult[0].classList.remove('hidden');
            fourthResult[1].classList.remove('hidden');
            fourthResult[0].classList.add('ibl-animation');
            fourthResult[1].classList.add('tbr-animation');
        }
    })
}, config1)
fourthTeamObserver.observe(teamSectionWrapper[3]);

const fifthTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fifthResult[0].classList.remove('hidden');
            fifthResult[1].classList.remove('hidden');
            fifthResult[0].classList.add('tbl-animation');
            fifthResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
fifthTeamObserver.observe(teamSectionWrapper[4]);