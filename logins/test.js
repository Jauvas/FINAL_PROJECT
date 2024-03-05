/*document.getElementById('registtration').addEventListener('click', function() {
    var x = document.getElementById('login');
        if (x.style.display  === 'block') {
            x.style.display ='none'
        }
}) 


const wrapper = document.querySelector('.wrapper');
const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');

register_link.addEventListener('click', ()=> {
    wrapper.classList.add();
})

login_link.addEventListener('click', ()=> {
    wrapper.classList.remove();
})

*/

const login = document.querySelector('.login')
const register = document.querySelector('.register')
const toggleButton = document.getElementById("loginID, registrationID"); // Replace with your button ID


if (login.style.display  === 'none') {
    login.style.display ='block'
}
else{
    login.style.display ='none'
}


if (register.style.display  === 'block') {
    register.style.display ='none'
}
else{
    register.style.display ='block'
}




