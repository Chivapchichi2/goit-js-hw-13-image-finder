import mark from '../templates/image-list.hbs';
import getImg from './apiService';

const galleryRef = document.querySelector('.gallery');
let page = 1;
let memoryRequest = '';
export default function rendering (request) {
  if (memoryRequest !== request) {
    page = 1;
    galleryRef.innerHTML = '';
  }
  memoryRequest = request;
  const link = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=12&key=20826556-19d7dce6dc96816ed1b7dccf7`;
  getImg(link)
  .then(img => galleryRef.insertAdjacentHTML('beforeend', mark(img.hits))
  )
    .catch(error => console.log(error));
  page++;
 };







