import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector('.gallery');




const galleryItemsMarkup = (arr) =>
    arr.map(
        ({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
        .join('');

console.log(galleryItemsMarkup(galleryItems));

galleryListEl.insertAdjacentHTML('beforeend',galleryItemsMarkup(galleryItems));


