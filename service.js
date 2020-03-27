//! DAL (data access layer) слой(документ),который отвечает за запросы к серверу(базе данных)

//? Данные(data) из UI передаются в функцию 'getImages' в которой имеются параметры через которые будут передаваться наши данные

function getImages(pageNumber, successCullBack) {  
  
  $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {  // Передаем в качестве объекта со значением(value) 
    success: function(data) {
      successCullBack(data);
    }
  });
}
