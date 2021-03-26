import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error, success } = require('@pnotify/core');

const options = {
    type: '',
    text: '',
    title: '',
    styling: 'brighttheme',
    animateSpeed: 'slow',
    delay: 2000,
    sticker: false,
    maxTextHeight: null,
};
  
const showSuccess = function () {
  options.text = 'Rendering new images';
  options.title = 'Good =))';
  options.type = 'success';
  success(options);
 }

const showError = function () {
  options.text = 'Something wrong';
  options.title = 'Bad =((';
  options.type = 'error';
  error(options);
}
export { showSuccess, showError };