//! DAL (data access layer) слой(документ),который отвечает за запросы к серверу(базе данных) с помощью определенных медотов (Jquery, axios)

//? Данные(data) из UI передаются в функцию 'getImages' в которой имеются параметры через которые будут передаваться наши данные

//todo Запрос с помощью библиотека Jquery
// function getImagesOld(pageNumber) {  
  
//   // Помещаем наш ajax-запрос в переменную, которая возвращает значение (нужно для того, чтобы моментально получить метод запроса, не дожидаясь выполнения ассинхронного запроса ajax)
//   // Создаем возвращаемую переменную для того, чтобы разграничить слой UI и DAL (чтобы точно понимали, кто и за что отвечает)
//   const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);  // Передаем в качестве объекта со значением(value) 
//   return promise;
// }


//todo Запрос с помощью библиотека 'axios'
function getImages(pageNumber) {  

  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);  // Применяем новый метод запроса данных с сервера 'axios' 
            
  return promise.then(function(response) {      // В данном коде как 'promise' так и  'then' возвращают данные 
    return response.data;
            })

}
