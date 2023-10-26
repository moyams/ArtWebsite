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
      src: 'unbroken.jpg',
      aspectRatio: 4 / 5,
      title: 'Unbroken',
      description: 'Coming to terms with past trauma is difficult, and art is cathartic. Pain is subtle but always present.2023',
    },
    {
      src: 'melodrama.jpg',
      aspectRatio: 4 / 5,
      title: 'Melodrama',
      description: 'This piece is what melodrama by Lorde sounds like to me. Drenched in color, full of sadness. 2022',
    },
    {
      src: 'nograve.PNG',
      aspectRatio: 4 / 5,
      title: 'No grave',
      description: 'Work song by Hozier served as an inspiration for this piece. I strive to have the same vigor for myself. 2023 ',
    },
    {
      src: 'TULIP.JPG',
      aspectRatio: 4/5,
      title: 'Unconditional love',
      description: 'I, like some people, have the honor of having a dog in my life. Chop is my muse. 2023 ',
    },
    {
      src: 'attention.PNG',
      aspectRatio: 4 / 5,
      title: 'Attention',
      description: 'My ex-boyfriend gave me this stuffed animal, and it was only fitting to give it to my dog.2023',
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