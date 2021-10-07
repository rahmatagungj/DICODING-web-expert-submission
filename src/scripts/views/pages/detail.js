import UrlParser from '../../routes/url-parser'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'
import CONFIG from '../../globals/config'

let data = []
let isError = false
const { SERVER_API_URL, SERVER_IMAGE_URL } = CONFIG

const getDetailRestaurant = (id) => {
  const url = SERVER_API_URL + `/detail/${id}`
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  return data
}

const Detail = {
  async onWillMount () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const dataFromServer = await getDetailRestaurant(url.id)

    const loader = document.getElementById('loading')
    loader.style.display = 'none'

    if (!dataFromServer) return
    if (dataFromServer.error) isError = true
    if (!dataFromServer.error) {
      data = dataFromServer.restaurant
    }
  },

  async onMounted () {
    // REMOVED BECAUSE JUST USING A TAG
    // const skipToContent = document.getElementById('skipToContent')
    // const mainContent = document.getElementById('mainContent')
    // skipToContent.addEventListener('click', () => {
    //   mainContent.scrollIntoView({ behavior: 'smooth' })
    //   mainContent.focus()
    // })
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        ...data
      }
    })
  },

  async render () {
    if (isError) {
      return `
      <h5 class="splash-text" id="content">Gagal memuat data</h5>
      `
    }
    return `
    <div class="container detail-restaurant" id="content">
      <div id="favoriteButtonContainer"></div>

      <div class="frame">
        <img alt="${data.name}" class="featured-image lazyload"
          src="./images/image-placeholder.png"
          width="600px"
          height="400px"
          data-src="${SERVER_IMAGE_URL}${data.pictureId}"
          loading="lazy"/>
        <div class="details">
          <h4>Restaurant ${data.name}</h4>
            <div class="rating">
            ⭐️ Rating ${data.rating}
            </div>
            <p class="description">
              ${data.address}, Kota ${data.city}
            </p>
            <p class="description">
              ${data.description} 
            </p>
        </div>
      </div>

      <h3 class="all-menus-title">All Menu</h3>
        <div class="menus">

          <div class="frame">
            <div class="drinks">
            <h3>Drinks</h3>
              <ul class="list-menu">
                ${data.menus.drinks.map((drink) => {
    return `
                  <li class="menu-item">${drink.name}</li>
                  `
  }).join(' ')}
              </ul>
            </div>
          </div>


          <div class="frame">
            <div class="food">
            <h3>Foods</h3>
              <ul class="list-menu">
                ${data.menus.foods.map((food) => {
    return `
                  <li class="menu-item">${food.name}</li>
                  `
  }).join(' ')}
              </ul>
            </div>
          </div>

        </div>


        <h3 class="all-menus-title">Reviews</h3>
          <div class="reviews">
          
          ${data.customerReviews.map((review) => {
    return `
                <div class="review">
                  <h4 class="user-name">${review.name}</h4>
                  <p class="date">${review.date}</p>
               <div class="frame reviewed">
                  <p>" ${review.review} "</p>
                </div>
                </div>
                `
  }).join(' ')}

      </div>
        `
  }
}

export default Detail
