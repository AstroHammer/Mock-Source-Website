const firstResult = document.querySelectorAll('.first-result');
const secondResult = document.querySelectorAll('.second-result');
const thirdResult = document.querySelectorAll('.third-result');
const fourthResult = document.querySelectorAll('.fourth-result');
const fifthResult = document.querySelectorAll('.fifth-result');
const teamSectionWrapper = document.querySelectorAll('.team-section-wrapper');

const config1 = {
    root: null,
    rootMargin: '0px',
    threshold: .2
};

const firstTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            firstResult[0].classList.add('tbl-animation');
            firstResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
firstTeamObserver.observe(teamSectionWrapper[0]);

const secondTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            secondResult[0].classList.add('ibl-animation');
            secondResult[1].classList.add('tbr-animation');
        }
    })
}, config1)
secondTeamObserver.observe(teamSectionWrapper[1]);

const thirdTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            thirdResult[0].classList.add('tbl-animation');
            thirdResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
thirdTeamObserver.observe(teamSectionWrapper[2]);

const fourthTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fourthResult[0].classList.add('ibl-animation');
            fourthResult[1].classList.add('tbr-animation');
        }
    })
}, config1)
fourthTeamObserver.observe(teamSectionWrapper[3]);

const fifthTeamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fifthResult[0].classList.add('tbl-animation');
            fifthResult[1].classList.add('ibr-animation');
        }
    })
}, config1)
fifthTeamObserver.observe(teamSectionWrapper[4]);