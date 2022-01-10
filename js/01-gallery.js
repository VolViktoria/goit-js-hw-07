import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
// Change code below this line




const galleryEl = document.querySelector('.gallery');

  
const galleryContainer = galleryItems
  .map(({ preview, original, description }) => `<div class="gallery__item">
                <a class="gallery__link" href='${original}'>
                    <img
                    class="gallery__image"
                    src='${preview}'
                    data-source='${original}'
                    alt='${description}'
                    />
                </a>
            </div>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryContainer);

const itemEl = document.getElementsByClassName('gallery__item');
const linkEl = document.getElementsByClassName('gallery__link');
const imageEl = document.getElementsByClassName('gallery__image');



for (let i = 0; i < itemEl.length; i += 1) {
  linkEl[i].addEventListener('click', function (event) {
    event.preventDefault();
    return false;
  });
  const currentImg = imageEl[i].dataset.source;
  itemEl[i].onclick = () => {
    const instance = basicLightbox.create(`<img width="800" height="600" src=${currentImg}>`);
      instance.show();
      
    document.addEventListener('keyup', e => {
        if (e.code === 'Escape')
            instance.close();
    });
  };
}