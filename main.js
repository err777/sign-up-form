const headerLogo = document.getElementById('header__logo')

const notice = document.getElementById('notice')
const noticeCross = document.querySelector('.notice__cross')

const phoneEnterForm = document.getElementById('phone-enter-form')
const phoneInput = document.getElementById('phone-enter-input')
const phoneConfirmFormSelect = document.getElementById('phone-enter-form-select')

const phoneConfirmForm = document.getElementById('phone-confirm-form')
const phoneConfirmFormInput = document.getElementById('phone-confirm-form-input')
const pencil = phoneConfirmForm.getElementsByClassName('phone-confirm-form__pencil')[0]
const checkMark = phoneConfirmForm.getElementsByClassName('phone-confirm-form__checkMark')[0]
const confirmLabelText = phoneConfirmForm.getElementsByClassName('phone-confirm-form__text')[0]

const phoneConfirmCodeForm = document.getElementById('phone-confirm-code-form')
const codeAgain = document.getElementsByClassName('phone-confirm-code-form__again')[0]
let confirmCodeInput = document.getElementById('phone-confirm-code-input')

const emailForm = document.getElementById('email-form')
const emailInput = document.getElementById('email-input')
const passInput = document.getElementById('pass-input')

const stepLineFirst = document.getElementsByClassName('step__line--first')[0]
const stepLineSecond = document.getElementsByClassName('step__line--second')[0]
const stepCircleSecond = document.getElementsByClassName('step__circle--second')[0]
const stepCircleThird = document.getElementsByClassName('step__circle--third')[0]

const sendButton = document.getElementById('send-button')
const confirmButton = document.getElementById('confirm-button')
const registerButton = document.getElementById('register-button')


let step = 1

phoneConfirmForm.style.display = 'none'
phoneConfirmCodeForm.style.display = 'none'
emailForm.style.display = 'none'
confirmButton.style.display = 'none'
registerButton.style.display = 'none'


 const checkStep = () => {
     if (step === 1) {
         phoneConfirmForm.style.display = 'none'
         phoneConfirmCodeForm.style.display = 'none'
         emailForm.style.display = 'none'
     }
     else
     if (step === 2) {
         phoneEnterForm.style.display = 'none'
         notice.style.display = 'none'
         phoneConfirmForm.style.display = 'block'
         checkMark.style.display = 'none'
         phoneConfirmCodeForm.style.display = 'block'
         emailForm.style.display = 'none'
         stepLineFirst.style.backgroundColor = '#007AFF'
         stepCircleSecond.style.backgroundColor = '#007AFF'
         stepCircleSecond.style.border = 'none'
         confirmButton.style.display = 'block'
         sendButton.style.display = 'none'
     }
     else
     if (step === 3) {
         phoneEnterForm.style.display = 'none'
         notice.style.display = 'none'
         phoneConfirmForm.style.display = 'block'
         pencil.style.display = 'none'
         phoneConfirmCodeForm.style.display = 'none'
         emailForm.style.display = 'block'
         stepLineFirst.style.backgroundColor = '#007AFF'
         stepLineSecond.style.backgroundColor = '#007AFF'
         stepCircleSecond.style.backgroundColor = '#007AFF'
         stepCircleThird.style.backgroundColor = '#007AFF'
         stepCircleSecond.style.border = 'none'
         stepCircleThird.style.border = 'none'
         confirmLabelText.innerHTML = 'Number confirmed'
         confirmButton.style.display = 'none'
         sendButton.style.display = 'none'
         registerButton.style.display = 'block'

     }
}

const closeNotice = () => {
    notice.style.display = 'none'
}

const backToMainPage = () => {
    step = 1
    window.location.reload()
}

const returnToMainPage = () => {
    step = 1
    window.location.reload()
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min
}

let randomInt = ''
let confirmValue = ''
let phoneInputValue = ''
let phoneConfirmFormSelectValue = ''
let emailInputValue = ''
let passInputValue = ''

const showRandomNumber = () => {
        randomInt = getRandomInt(1000, 9999)
        window.alert(randomInt)
}

const goToSecondStep = () => {
    phoneInputValue = phoneInput.value
    phoneConfirmFormSelectValue = phoneConfirmFormSelect.value
    if (phoneInputValue.length === 10) {
        step = 2
        checkStep()
        phoneConfirmFormInput.value = phoneConfirmFormSelectValue + ' ' + phoneInputValue
    }
    else {
        sendButton.style.color = '#ee2222'
        window.alert('Номер телефона должен состоять из десяти символов')
    }
}

const goToThirdStep = () => {
    confirmValue = +confirmCodeInput.value
    if (confirmValue === randomInt) {
        step = 3
        checkStep()
    }
}

const getCongrats = () => {
    emailInputValue = emailInput.value
    passInputValue = passInput.value
    if (emailInputValue.length > 5 && passInputValue.length > 5) {
        window.alert('Поздравляем, вы завершили регистрацию!')
        window.location.reload()
    }
}

sendButton.addEventListener('click', goToSecondStep)
confirmButton.addEventListener('click', goToThirdStep)
registerButton.addEventListener('click', getCongrats)

codeAgain.addEventListener('click', showRandomNumber)
noticeCross.addEventListener('click', closeNotice)
headerLogo.addEventListener("click", backToMainPage)
pencil.addEventListener('click', returnToMainPage)
codeAgain.addEventListener('click', showRandomNumber)