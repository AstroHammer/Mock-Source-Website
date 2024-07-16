let mql = window.matchMedia('(width <= 1000px)');
let mql2 = window.matchMedia('(width >= 1001px');

const signUpInterface = document.querySelector('.user-details-interface-container');

const interfacePlaceMarker = document.querySelector('.interface-placemarker');
const interfaceOrigin = document.querySelector ('.form-wrapper');

const screenSize = window.innerWidth;
if (screenSize <= 1000) {
    interfacePlaceMarker.appendChild(signUpInterface);
}

function fullWidth(mql) {
    if (mql.matches) {
        interfacePlaceMarker.appendChild(signUpInterface);
        console.log('interface is moved');
    }
}
function halfWidth(mql2) {
    if (mql2.matches) {
        interfaceOrigin.appendChild(signUpInterface);
        console.log('interface is back to origin');
    }
}

mql.addEventListener('change', fullWidth);
mql2.addEventListener('change', halfWidth);