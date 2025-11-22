document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        // Получаем значения из формы
        const quantity = parseInt(quantityInput.value);
        const price = parseInt(productSelect.value);

        // Валидация ввода (проверка на пустые поля и недопустимые символы)
        if (isNaN(quantity) || quantity <= 0) {
            resultDiv.innerHTML = 'Ошибка: введите корректное количество товара!';
            return;
        }

        if (isNaN(price) || price === 0) {
            resultDiv.innerHTML = 'Ошибка: выберите товар из списка!';
            return;
        }

        // Рассчитываем стоимость заказа
        const totalCost = quantity * price;

        // Выводим результат на страницу
        resultDiv.innerHTML = `Стоимость заказа: ${totalCost} руб.`;
    });
});
