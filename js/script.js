document.getElementById("marathonForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let distance = document.getElementById("distance").value;
    let formData = `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nДистанция: ${distance}`;
    alert("Данные формы регистрации на полумарафон:\n" + formData);
});

document.getElementById("callbackButton").addEventListener("click", function() {
    let errors = [];
    let name = document.getElementById("callbackName").value;
    let email = document.getElementById("callbackEmail").value;
    let phone = document.getElementById("callbackPhone").value;
    let message = document.getElementById("callbackMessage").value;
    if (!name || !email || !phone) {
        errors.push("Все поля обязательны для заполнения!");
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        errors.push("Неверный формат email!");
    }
    if (phone && !/^\+?[78][-(\s]*\d{3}[-)\s]*\d{3}[-\s]*\d{2}[-\s]*\d{2}$/.test(phone)) {
        errors.push("Неверный формат телефона!");
    }
    if (errors.length === 0) {
        let formData = `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`;
        alert("Данные формы заказа обратного звонка:\n" + formData);
    } else {
        alert("Ошибки в форме:\n" + errors.join("\n"));
    }
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

let counter = 1;

document.getElementById('changeStylesButton').addEventListener('click', function() {
    const secondContainer = document.querySelector('.secondContainer');
    counter++; // Увеличиваем счетчик

    if (counter % 2 === 0) { // Если счетчик делится на 2 без остатка
        secondContainer.style.backgroundColor = '#f542c2'; // Применяем один цвет
    } else {
        secondContainer.style.backgroundColor = '#fafafa'; // Применяем другой цвет
    }
});
