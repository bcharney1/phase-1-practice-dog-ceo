console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
  return fetch(imgUrl)
  .then(response => response.json())
  .then(result => {
    dogImages(result.message)
  })
}

function dogImages(dogs){
  console.log(dogs)
  return dogs.forEach(dog => {
    console.log(dog)
    const goodBoyContainer = document.querySelector('#dog-image-container')
    const goodBoy = document.createElement('img')
    goodBoy.src = dog
    goodBoyContainer.appendChild(goodBoy)
  });
}

