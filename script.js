//загрузки API Яндекс.Карт
ymaps.ready(init);

function init() {
    //карта
    var myMap = new ymaps.Map('map', {
        center: [59.934280, 30.322760], // широта, долгота центра СПб
        zoom: 14, // уровень приближения
        controls: ['zoomControl', 'fullscreenControl'] // элементы управления
    });

    //маркер в центре
    var myPlacemark = new ymaps.Placemark([59.934280, 30.322760], {
        hintContent: 'Центр Санкт-Петербурга',
        balloonContent: 'Здесь начинается наш архитектурный маршрут!'
    });

    myMap.geoObjects.add(myPlacemark);
}
