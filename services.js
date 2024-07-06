// const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', event => {
        accordionButton.classList.toggle('active');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


function alterMaxHeight() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(accordionButton => {
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active')) {
            accordionItemBody.style.transition = 'none';
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            accordionItemBody.style.transition = 'max-height .3s ease-out';
        } 
    })
}
window.addEventListener('resize', alterMaxHeight);