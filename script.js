//! UI  (user interface) доступ к пользовательнскому интерфейсу (содержатся элементы доступа к html документу)
'use strict'

                  //обращаемся с помощью метода Jquery к элементам в DOM-дереве 
const pageNumber = document.querySelector('#id_number');
const clickButton = document.querySelector('#click_button');
const resultShow = document.querySelector('#result');

//?  Данная функция отвечает за событие( а именно клик), в данное событие входит ('само событие', функция)
//?  В данном случае мы присвоили анонимную стрелочную функцию с функцией 'getImages' внутри, с параметрами (через которые
//?  будут передаваться наши данные и функции в DAL  и UI.

clickButton.addEventListener('click', () => {
  getImages(pageNumber.value, onDataReceived)
});                                                // подробнее о событии в книге с 260


function onDataReceived(data) {                     // При помощи параметра 'data'  мы передаем наши данные в cull-back функции
data.forEach(element => {
  const img = document.createElement('img');        // создаем новый элемент формата  <img>
  document.querySelector('#result').appendChild(img);  // создаем к основному блоку 'body'  и создаем новый подэлемент переменная 'img' <body> <img> </body>
  img.src = element.thumbnail;                      // привязываем путь файла к элементу формата '<img src=" ">  и указываем элементы данных которые нам нужно перебрать при помощи метода 'forEch'                            
});
}



