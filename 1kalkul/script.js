document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('requestForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;

            if (name && email && phone && course) {
                alert('Спасибо за вашу заявку!');
                form.reset();
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }


    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // предотвращаем отправку для обработки через JS

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Спасибо за вашу заявку!');
                    form.reset(); // очищаем форму
                } else {
                    response.json().then(data => {
                        if (data.errors) {
                            alert(data.errors.map(error => error.message).join(", "));
                        }
                    });
                }
            })
            .catch(error => {
                alert('Произошла ошибка при отправке формы.');
                console.error('Ошибка:', error);
            });
        });
    }




});
