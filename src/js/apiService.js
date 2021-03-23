// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// 20826556-19d7dce6dc96816ed1b7dccf7
// {
//   "comments": 78,
//   "downloads": 63296,
//   "favorites": 558,
//   "id": 1508613,
//   "imageHeight": 2135,
//   "imageSize": 1630104,
//   "imageWidth": 2894,
//   "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//   "likes": 575,
//   "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//   "previewHeight": 110,
//   "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//   "previewWidth": 150,
//   "tags": "cat, animal, cat portrait",
//   "type": "photo",
//   "user": "cocoparisienne",
//   "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//   "user_id": 127419,
//   "views": 127450,
//   "webformatHeight": 472,
//   "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//   "webformatWidth": 640
// }

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок
// tags alt...
import mark from '../templates/image-list.hbs';
console.log(mark);
let page = 1;
const link = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=time&page=${page}&per_page=12&key=20826556-19d7dce6dc96816ed1b7dccf7`;

const getImg = async () => {
  try {
    const images = await fetch(link);
    const result = images.json();
    console.dir(result);
    return result;
  } catch (err) {
    throw err;
  }
};


  
const galleryRef = document.querySelector('.gallery');
// galleryRef.insertAdjacentHTML('beforeend', mark());


getImg()
  .then(img => galleryRef.insertAdjacentHTML('beforeend', mark(img.hits))
  )
  .catch(error => console.log(error));