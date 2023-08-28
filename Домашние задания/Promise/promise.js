function delayedPrint(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

function fetchData(object) {
    return new Promise((resolve) => {
        // Эмулируем "загрузку данных" и передаем фейковые данные через промис
        setTimeout(() => {
            resolve(object.fakeData);
        }, 1000); // Изменил на 1 секунду для демонстрации
    });
}

delayedPrint("Начинаю загрузку данных...", 2000)
    .then(() => fetchData({ fakeData: "Фейковые данные" }))
    .then((data) => {
        console.log("Полученные данные:", data);
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });