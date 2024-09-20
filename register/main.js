document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const email = document.getElementById('email').value.trim();
    const captchaCode = document.getElementById('captcha-code').value.trim();

    let errorMessage = '';

    
    if (!login || !password || !confirmPassword || !email || !captchaCode) {
        errorMessage += 'Заполните все поля!\n';
    }

   
    if (password !== confirmPassword) {
        errorMessage += 'Пароли не совпадают!\n';
    }

    if (!validateEmail(email)) {
        errorMessage += 'Введите правильный emaфil!\n';
    }

  
    if (errorMessage) {
        alert(errorMessage);
        return;
    }


    alert('Регистрация успешна!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
