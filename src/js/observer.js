import { rendering, memoryRequest } from './rendering';
const options = {
  rootMargin: '200px',
  threshold: 0.1,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      rendering(memoryRequest);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);
export default observer;