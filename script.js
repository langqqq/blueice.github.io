const backgroundContainer = document.querySelector('body');

fetch('https://source.unsplash.com/random')
  .then(response => {
    backgroundContainer.style.backgroundImage = `url('${response.url}')`;
  })
  .catch(error => {
    console.error('Error fetching background image:', error);
  });
