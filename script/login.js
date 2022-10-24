const login_user = document.querySelector('.login-user')
const login_psw = document.querySelector('.login-psw')

logIn()
signUp()


function logIn(){
    const logA = document.createElement('a');
    logA.classList = 'btn-login'
    logA.textContent= 'Log In'
    logA.href = 'main.html'
    document.querySelector('.log-container').appendChild(logA) 
    
} 

function signUp(){
    const logSign = document.createElement('a');
    logSign.href = 'main.html'
    logSign.classList = 'btn-sign-up'
    logSign.textContent= 'Sign Up'
    document.querySelector('.sign-container').appendChild(logSign)
    
}