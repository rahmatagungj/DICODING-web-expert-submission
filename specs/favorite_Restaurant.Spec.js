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

  it('should not show the unfavorite button when the restaurant has not been unfavorited before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="make as unfavorited"]')).toBeFalsy()
  })

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

  it('should not add a restaurant again when its already favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurant.putRestaurant({ id: 1 })
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#favButton').dispatchEvent(new Event('click'))
    // tidak ada film yang ganda
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }])

    FavoriteRestaurant.deleteRestaurant(1)
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
