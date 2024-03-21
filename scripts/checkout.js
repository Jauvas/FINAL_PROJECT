const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login')
const toggleButton = document.getElementById("loginID, registrationID"); // Replace with your button ID


const btnPopup = document.querySelector('.btn-login-popup');
const btnPopupRemove = document.querySelector('.close-popup');
const accounts = document.querySelector('.account-button');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

accounts.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

btnPopupRemove.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

function remove() {
    wrapper.classList.remove('active-popup')
};

function openPopup() {
    wrapper.display = 'block'
};

function closePopup () {
    wrapper.display = 'none'
};

function toRegister() {
    login.style.display = 'none'
    register.style.display = 'block'
};

function toLogin() {
    register.style.display = 'none'
    login.style.display = 'block'
}