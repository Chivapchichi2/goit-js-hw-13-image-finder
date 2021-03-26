import {rendering, galleryRef} from'./js/rendering';
import './styles.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const basicLightbox = require('basiclightbox')
const debounce = require('lodash.debounce');
const formRef = document.querySelector('#search-form');
const inputRef = formRef.querySelector('input[ name="query"]');
const buttonRef = formRef.querySelector('.button');


formRef.addEventListener('submit', (e) => {
  e.preventDefault();
  rendering(inputRef.value);
});

inputRef.addEventListener('input', debounce((e) => {
  if (e.target.value) return rendering(e.target.value);
}, 500));

buttonRef.addEventListener('click', () => {
  document.querySelector('.gallery').innerHTML = "";
}
)

galleryRef.addEventListener('click', (e) =>
{
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src='${e.target.parentNode.href}'>`,).show();
})