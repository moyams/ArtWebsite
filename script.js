(() => {
  const images = [
    {
      src: 'unbroken.jpg',
      aspectRatio: 4 / 5,
      title: 'Unbroken',
      description: 'Coming to terms with past trauma is difficult, and art is cathartic. Pain is subtle but always present.2023',
    
    },
    { src: 'nograve.PNG',
      aspectRatio: 4 / 5,
      title: 'No grave',
      description: 'Work song by Hozier served as an inspiration for this piece. Meant to convey the light self-love illuminates. 2023 ',
   
     
    },
    { src: 'halloween.jpg',
      aspectRatio: 4 / 5,
      title: 'Happy Halloween',
      description: 'I created this design for my community project. This young dolly design was given to trick-or-treaters, for Halloween. 2023 ',
   
     
    },
    {  
      src: 'attention.PNG',
      aspectRatio: 4 / 5,
      title: 'Attention',
      description: 'My ex-boyfriend gave me this stuffed animal, so I gave it to my dog.2023',
    
     },
    {
      src: 'melodrama.jpg',
      aspectRatio: 4 / 5,
      title: 'Melodrama',
      description: 'This piece is what melodrama by Lorde sounds like to me. Drenched in color, full of sadness. 2022',
    },
    { 
      src: 'creep.jpg',
      aspectRatio: 4 / 5,
      title: 'Creep',
      description: 'Meant to convey the physical manifestation of uncomfort. 2022',
      },
    {
      src: 'TULIP.JPG',
      aspectRatio: 4/5,
      title: 'Chop\'s\ Bed',
      description: 'Chop is my muse. 2023 ',
    },
    {
      src: 'chop.jpg',
      aspectRatio: 4 / 5,
      title: 'Chop',
      description: 'My muse (Chop) with a cowboy hat. 2022',
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