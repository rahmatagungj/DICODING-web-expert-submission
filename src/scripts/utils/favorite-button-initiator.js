import FavoriteRestaurant from '../data/favoriteRestaurant'
import { FavoriteButton, FavoritedButton } from '../views/templates/favoriteButton'
import NotificationHelper from './notification-helper'
import CONFIG from '../globals/config'

const { SERVER_IMAGE_URL } = CONFIG

const showFavoriteNotification = (state, data) => {
  NotificationHelper.sendNotification({
    title: `Restaurant ${data.name} ${state} to Favorite List!`,
    options: {
      body: data.name,
      image: `${SERVER_IMAGE_URL + data.pictureId}`
    }
  })
}

const FavoriteButtonInitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant
    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited()
    } else {
      this._renderFavorite()
    }
  },

  async _isRestaurantExist (id) {
    const restaurants = await FavoriteRestaurant.getRestaurant(id)
    return !!restaurants
  },

  _renderFavorite () {
    this._favoriteButtonContainer.innerHTML = FavoriteButton
    const favoriteButton = document.querySelector('#favButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
      showFavoriteNotification('added', this._restaurant)
    })
  },

  _renderFavorited () {
    this._favoriteButtonContainer.innerHTML = FavoritedButton
    const favoriteButton = document.querySelector('#favButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
      showFavoriteNotification('removed', this._restaurant)
    })
  }
}

export default FavoriteButtonInitiator
