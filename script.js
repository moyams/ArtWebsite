(() => {
  const images = [
    {
      src: 'chop.jpg',
      aspectRatio: 4 / 5,
      title: 'Chop',
      description: 'Description',
    },
    {
      src: 'creep.jpg',
      aspectRatio: 4 / 5,
      title: 'Creep',
      description: '',
    },
    {
      src: 'iloveme.jpg',
      aspectRatio: 4 / 5,
      title: 'I love me',
      description: '',
    },
    {
      src: 'melodrama.jpg',
      aspectRatio: 4 / 5,
      title: 'Melodrama',
      description: '',
    },
    {
      src: 'nograve.PNG',
      aspectRatio: 4 / 5,
      title: 'No grave',
      description: '',
    },
    {
      src: 'promo.PNG',
      aspectRatio: 1,
      title: 'Promo',
      description: '',
    },
    {
      src: 'yfyf.PNG',
      aspectRatio: 4 / 5,
      title: 'Yfyf',
      description: '',
    },
  ]
  const gallery = document.querySelector('#gallery');

  images.forEach(({ src, aspectRatio, title, description }) => {
    // Template literal - this is a bit easier to read than the other way
    const html = `
      <div class="item" style="aspect-ratio: ${aspectRatio}">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="assets/art/${src}" class="image" />
            <img src="assets/Frame.png" class="frame" />
          </div>
          <div class="flip-card-back">
            <div class="description">
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
          </div>
        </div>
      </div>
    `
    gallery.insertAdjacentHTML('beforeend', html);
  });
})();
