const submitBtn = document.getElementById('btn-submit')

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validate = (event) => {
    const emailField = document.getElementById('email')
    const emailError = document.getElementById('email-error')
    event.preventDefault()

    if (emailField.value === '') {
        emailError.innerText = 'Please fill out email field'
        emailError.style.visibility = 'visible'
        emailField.focus()
        return false
    }

    if (!emailIsValid(emailField.value)) {
        emailError.innerText = 'Please enter a valid email address'
        emailError.style.visibility = 'visible'
        emailField.focus()
        return false
    }

    emailError.style.visibility = 'hidden'
    alert('Email address was valid')
    return true
}

submitBtn.addEventListener('click', validate)
