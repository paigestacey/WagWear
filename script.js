
/* accordion*/
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;

            // Toggle active class on the panel to show/hide it
            panel.classList.toggle('active');

            // Close other panels
            const otherPanels = document.querySelectorAll('.panel');
            otherPanels.forEach(otherPanel => {
                if (otherPanel !== panel && otherPanel.classList.contains('active')) {
                    otherPanel.classList.remove('active');
                }
            });
        });
    });
});


/*API*/
document.getElementById('getDogBreedBtn').addEventListener('click', function() {
    fetch('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': 'live_yD96x9FgQrnVaTxdEZ09eX36jEpTH4XcINkKVpFNFV20lbTdt1o0dVYMYyU2QfUG'
      }
    })
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomBreed = data[randomIndex];
  
      document.getElementById('breedName').textContent = randomBreed.name;
      document.getElementById('breedDescription').textContent = randomBreed.description;
  
      document.getElementById('dogBreedCard').style.display = 'block';

      fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${randomBreed.id}`, {
        headers: {
          'x-api-key': 'live_yD96x9FgQrnVaTxdEZ09eX36jEpTH4XcINkKVpFNFV20lbTdt1o0dVYMYyU2QfUG'
        }
      })

      .then(response => response.json())
    .then(imageData => {
      const imageUrl = imageData[0].url;
      const breedImage = document.getElementById('breedImage');
      breedImage.src = imageUrl;
      breedImage.style.display = 'block';
    })
    .catch(error => console.error('Error fetching image:', error));
  })
  .catch(error => console.error('Error fetching breed:', error));
});

