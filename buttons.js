const btnHire = document.getElementById('hire-btn');
const hire = document.getElementById('hire');
let open = false;
btnHire.addEventListener('click', () => {
    if (open == false) {
        hire.classList.remove('hide');
        open = true;
    }else {
        hire.classList.add('hide');
        open = false;
    }
    
});