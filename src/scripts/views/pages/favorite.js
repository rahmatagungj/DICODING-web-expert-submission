import FavoriteRestaurant from '../../data/favoriteRestaurant'
import RestaurantCard from '../templates/restaurantCard'

let data = []

const Favorite = {
  async onWillMount () {
    const restaurants = await FavoriteRestaurant.getAllRestaurant()
    data = restaurants
    const restaurantContainer = document.querySelector('#mainContent')
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += RestaurantCard(restaurant)
    })
  },

  async onMounted () {
    const skipToContent = document.getElementById('skipToContent')
    const mainContent = document.getElementById('mainContent')
    skipToContent.addEventListener('click', () => {
      mainContent.scrollIntoView({ behavior: 'smooth' })
      mainContent.focus()
    })
    const loader = document.getElementById('loading')
    loader.style.display = 'none'
  },

  async render () {
    if (data.length === 0) {
      return `
        <div class="container list-restaurant" id="content">
        <h3>Favorite Restaurant</h3>
            <div class="items">
                Nothing here.
            </div>
        </div>
        `
    }
    return `
        <div class="container list-restaurant" id="content">
        <h3>Favorite Restaurant</h3>
            <div class="items">
                ${data.map(item => RestaurantCard(item)).join(' ')}
            </div>
        </div>
        `
  }
}

export default Favorite
