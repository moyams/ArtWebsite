(() => {
  const images = [
    {
      src: 'chop.jpg',
      aspectRatio: 4 / 5,
    },
    {
      src: 'creep.jpg',
      aspectRatio: 4 / 5,
    },
    {
      src: 'iloveme.jpg',
      aspectRatio: 4 / 5,
    },
    {
      src: 'melodrama.jpg',
      aspectRatio: 4 / 5,
    },
    {
      src: 'nograve.PNG',
      aspectRatio: 4 / 5,
    },
    {
      src: 'promo.PNG',
      aspectRatio: 1,
    },
    {
      src: 'yfyf.PNG',
      aspectRatio: 4 / 5,
    },
  ]
  const gallery = document.querySelector('#gallery');

  images.forEach(({ src, aspectRatio }) => {
    const html = `
      <div class="item">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="assets/art/${src}" class="image" />
            <img src="assets/Frame.png" class="frame" />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    `
    gallery.insertAdjacentHTML('beforeend', html);
  });
})();
