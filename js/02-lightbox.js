import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupGalary = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
  ''
);
gallery.innerHTML = markupGalary;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
