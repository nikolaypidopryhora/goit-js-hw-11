import { getImages } from './js/pixabay-api';
import {
  renderGallery,
  showError,
  simpleLightbox,
} from './js/render-functions';

const searchForm = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', search);

function search(evt) {
  evt.preventDefault();
  const query = searchForm.elements.search.value.trim();
  if (!query) {
    showError('Empty input!');
    return;
  }
  gallery.innerHTML = '<span class="loader"></span>';
  getImages(query)
    .then(data => {
      if (data.total) {
        gallery.innerHTML = renderGallery(data.hits);
        simpleLightbox.refresh();
      } else {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        gallery.innerHTML = '';
      }
      searchForm.reset();
    })
    .catch(() => {
      showError('Something went wrong!');
      gallery.innerHTML = '';
    });
}
