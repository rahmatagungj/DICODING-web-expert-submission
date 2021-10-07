import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'
import FavoriteRestaurant from '../src/scripts/data/favoriteRestaurant'

/* eslint-disable no-undef */

describe('Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(() => {
    addFavoriteButtonContainer()
  })

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="make as favorite"]')).toBeTruthy()
  })

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="make as unfavorite"]')).toBeFalsy()
  })

  // USER CAN MAKE RESTAURANT AS FAVORITE
  it('should be able to make restaurant as favorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    document.querySelector('#favButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurant.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    FavoriteRestaurant.deleteRestaurant(1)
  })

  // USER CAN MAKE RESTAURANT AS UNFAVORITE
  it('should be able to make restaurant as unfavorite', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    document.querySelector('#favButton').dispatchEvent(new Event('click'))
    const favoritedRestaurant = await FavoriteRestaurant.getRestaurant(1)
    expect(favoritedRestaurant).toEqual({ id: 1 })

    FavoriteRestaurant.deleteRestaurant(1)
    const willBeUnfavoritedRestaurant = await FavoriteRestaurant.getAllRestaurant()
    expect(document.querySelector('[aria-label="make as unfavorite"]')).toBeTruthy()

    document.querySelector('#favButton').dispatchEvent(new Event('click'))
    expect(willBeUnfavoritedRestaurant).toEqual([])
  })

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {}
    })

    document.querySelector('#favButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([])
  })
})
