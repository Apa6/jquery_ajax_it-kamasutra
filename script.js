//! UI  (user interface) доступ к пользовательнскому интерфейсу (содержатся элементы доступа к html документу)
//! В данном разделе взаимодействуем с интерфейсом (обозначаем элементы, записываем действия(function), определяем события, и возвращаем данные с DAL)
'use strict'

                  //обращаемся с помощью метода Jquery к элементам в DOM-дереве 
const pageNumber = document.querySelector('#id_number');
const clickButton = document.querySelector('#click_button');



function onDataReceived(data) {                       // При помощи параметра 'data'  мы передаем наши данные в cull-back функции
data.forEach(element => {                             // Создаем element  для перебора наших данных (так как на сервере присутствуют множество разграниченных данных при помощи параметра 'element'  мы можем выбрать какой именно элемент масива данных нам нужен)
  const img = document.createElement('img');          // создаем новый элемент формата  <img>
  document.querySelector('#result').appendChild(img); // создаем к основному блоку 'body'  и создаем новый подэлемент при помощи jquery-метода и указываем переменную 'img' <body> <img> </body>
  img.src = element.thumbnail;                        // привязываем путь файла к элементу формата '<img src=" ">  и указываем элементы данных которые нам нужно перебрать при помощи метода 'forEch'                            
});
}

//?  Данная функция отвечает за событие( а именно клик), в данное событие входит ('само событие', функция)
//?  В данном случае мы присвоили анонимную стрелочную функцию с функцией 'getImages' внутри, с параметрами (через которые
//?  будут передаваться наши данные и функции в DAL  и UI.

clickButton.addEventListener('click', () => {         // вторым параметром задаем анонимную функцию в которой указываем подмножество функций (с данными, помещенными в параметры) 
const promise = getImages(pageNumber.value)           // получаем через переменную AJAX ЗАПРОС НА СЕРВЕР  (необходимо для того, чтобы избежать путаницы в разграничениях исполнения от UI(script.js) к DAL(service.js)
                                                      // Мы получили наши данные от сервера посрежством AJAX- запроса и вернули promise внутри функции 'getImages'. 
                                                      // Далее присваиваем функцию с данными одноименной переменной 
                                                      // И назначаем метод 'then'(когда). Тем самым мы говорим: "Выполни операцию, находящуюся в переменной 'promise' когда(then) выполнится функция 'onDataReceived' "
  promise
    .then(onDataReceived);
});                                                   // подробнее о событии в книге с 260


