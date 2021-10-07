import RestaurantCard from '../templates/restaurantCard'
import CONFIG from '../../globals/config'

let data = []
let isError = false
const { SERVER_API_URL } = CONFIG

const getAllRestaurants = () => {
  const url = SERVER_API_URL + '/list'
  const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
      isError = true
    })
  return data
}

const Home = {
  async onWillMount () {
    const dataFromServer = await getAllRestaurants()

    const loader = document.getElementById('loading')
    loader.style.display = 'none'

    if (!dataFromServer) return
    if (dataFromServer.error) isError = true
    if (!dataFromServer.error) {
      data = dataFromServer.restaurants
    }
  },

  async onMounted () {
    const skipToContent = document.getElementById('skipToContent')
    const mainContent = document.getElementById('mainContent')
    skipToContent.addEventListener('click', () => {
      mainContent.scrollIntoView({ behavior: 'smooth' })
      mainContent.focus()
    })
  },

  async render () {
    if (isError) {
      return `
      <h5 class="splash-text">Gagal memuat data</h5>
      `
    }
    return `
        <div class="container list-restaurant" id="content">
        <h3>Explore Restaurant</h3>
            <div class="items">
                ${data.map(item => {
    return RestaurantCard(item)
  }).join(' ')}
            </div>
        </div>
        `
  }
}

export default Home
