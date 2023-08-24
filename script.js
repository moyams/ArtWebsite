(() => {
  const images = [
    {
      src: 'chop.jpg',
      aspectRatio: 4/5,
    },
    {
      src: 'creep.jpg',
      aspectRatio: 4/5,
    },
    {
      src: 'iloveme.jpg',
      aspectRatio: 4/5,
    },
    {
      src: 'melodrama.jpg',
      aspectRatio: 4/5,
    },
    {
      src: 'nograve.PNG',
      aspectRatio: 4/5,
    },
    {
      src: 'promo.PNG',
      aspectRatio: 1,
    },
    {
      src: 'yfyf.PNG',
      aspectRatio: 4/5,
    },
  ]
  const gallery = document.querySelector('#gallery');
  
  images.forEach(({src, aspectRatio}) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('item');

    const image = document.createElement('img');
    image.setAttribute('src', `assets/art/${src}`);
    image.classList.add('image');
    imgContainer.appendChild(image);

    const frame = document.createElement('img');
    frame.setAttribute('src', 'assets/Frame.png');
    frame.classList.add('frame');
    imgContainer.appendChild(frame);

    imgContainer.style.aspectRatio = aspectRatio;
    gallery.appendChild(imgContainer);
  });
})();


