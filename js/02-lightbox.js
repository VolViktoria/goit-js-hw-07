import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryEl = document.querySelector('.gallery');

  
const galleryContainer = galleryItems
  .map(({ preview, original, description }) => `<a class="gallery__item" href='${original}'>
        <img class="gallery__image" src='${preview}' alt='${description}' />
            </a>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryContainer);




let itemEl = document.getElementsByClassName('gallery__item');

for (let i = 0; i < itemEl.length; i += 1)
{
    itemEl[i].addEventListener('click', function (event)
    {
        event.preventDefault()
        return false
    }
    )
}
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionData: 'alt',
        captionPosition: 'bottom',
        animationSpeed: 250
    }
);
console.log(lightbox);

