var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

