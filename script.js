let input = "";

function addDigit(digit) {
    input += digit;
    document.getElementById("passwordDisplay").value = '*'.repeat(input.length);
}

function checkPassword() {
    const correctPassword = "4927";  // Тут можна змінити на будь-який правильний пароль
    const error = document.getElementById("error");

    if (input === correctPassword) {
        error.textContent = "";
        alert("Пароль вірний. Вітаємо!");
        input = "";
        document.getElementById("passwordDisplay").value = "";
    } else {
        error.textContent = "Неправильний пароль. Спробуйте ще.";
        input = "";
        document.getElementById("passwordDisplay").value = "";
    }
}
