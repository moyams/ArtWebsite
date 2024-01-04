(() => {
  const images = [
    {
      src: 'No_Grave.jpg',
      aspectRatio: 4 / 5,
      title: 'No Grave',
      description: '2023',
    
    },

    {  
      src: 'RasPberryJam.jpg',
      aspectRatio: 6 / 4,
      title: 'Raspberry Jam',
      description: 'I am the product of things around me. 2023',
    
     },  
     { src: 'YellowWallpaper.jpg',
      aspectRatio: 4 / 5,
      title: 'Yellow WallPaper',
      description: 'A woman with her yellow wallpaper. How original? 2023 ',
   
     
    },
    {
      src: 'DeliverUS.jpg',
      aspectRatio: 4 / 5,
      title: 'Deliver Us',
      description: 'Drenched in darkness searching for light. 2023',
    },  

    
  ]
  const gallery = document.querySelector('#gallery');

  images.forEach(({ src, aspectRatio, title, description }) => {
    // Template literal - this is a bit easier to read than the other way
    const html = `
    <div class= "container">
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
      </div>
    `
    gallery.insertAdjacentHTML('beforeend', html);
  });
})();