import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'
import FavoriteRestaurant from '../src/scripts/data/favoriteRestaurant'

/* eslint-disable no-undef */

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
}

// USER CAN MAKE RESTAURANT AS FAVORITE
describe('Favorite A Restaurant', () => {
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

    await FavoriteRestaurant.putRestaurant({ id: 1 })
    document.querySelector('#favButton').dispatchEvent(new Event('click'))
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

// USER CAN MAKE RESTAURANT AS UNFAVORITE
describe('Unfavorite a Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer()
    await FavoriteRestaurant.putRestaurant({ id: 1 }) // add a restaurant as favorite first
  })

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1) // delete the restaurant after test
  })

  it('should show unfavorite button when the restaurant has been favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="make as unfavorite"]')).toBeTruthy()
  })

  it('should not show unfavorite button when the restaurant has been favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="make as favorite"]')).toBeFalsy()
  })

  it('should be able to remove favorited restaurant from the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    document
      .querySelector('[aria-label="make as unfavorite"]')
      .dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([])
  })

  it('should not error if the unfavorited restaurant is not in the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    await FavoriteRestaurant.deleteRestaurant(1)
    document
      .querySelector('[aria-label="make as unfavorite"]')
      .dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([])
  })
})
