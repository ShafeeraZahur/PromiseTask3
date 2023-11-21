function fetchRandomDog() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'; 
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayDogImage(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        displayError(error);
      });
  }
  
  function displayDogImage(data) {
    const dogImagesContainer = document.getElementById('dog-images-container');
    dogImagesContainer.innerHTML = '';
  
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = 'Random Dog Image';
  
    dogImagesContainer.appendChild(image);
  }
  
  function displayError(error) {
    const dogImagesContainer = document.getElementById('dog-images-container');
    dogImagesContainer.textContent = `Error: ${error.message}`;
  }
  