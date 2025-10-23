const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

function getGallerry(images) {
  const gallery = document.querySelector('.gallery');

  const imagesLi = images
    .map(
      image =>
        `<li class="gallery-li-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', imagesLi);
}

getGallerry(images);

// // // // // //
// БЕЗ ФУНКЦІЇ
// const gallery = document.querySelector('.gallery');

// const imagesLi = images
//   .map(
//     image =>
//       `<li class="gallery-li-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></li>`
//   )
//   .join('');
// gallery.insertAdjacentHTML('beforeend', imagesLi);

// // // // // // // // // // // // // //
// ЦИКЛ № 1
// images.forEach(image => {
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li class="gallery-li-item"><img src="${image.url}" alt="${image.alt}"></li>`
//   );
// });

// // // // // // // // // // // // // //
// ЦИКЛ- ФУНКЦІЯ № 2
// function getGallerry(images) {
//   images.forEach(image => {
//     const galleryLi = document.createElement('li');
//     const galleryImg = document.createElement('img');
//     galleryImg.src = image.url;
//     galleryImg.alt = image.alt;
//     galleryImg.classList.add('gallery-img');
//     galleryLi.classList.add('gallery-li-item');
//     galleryLi.append(galleryImg);
//     gallery.append(galleryLi);
//   });
// }

// getGallerry(images);
