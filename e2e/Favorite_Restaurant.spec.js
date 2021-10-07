const assert = require('assert')

/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
Feature('Favorite Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('test user can make restaurant as favorite', async ({ I }) => {
  I.seeElement('.list-restaurant')
  I.see('Nothing here', '.items')

  I.amOnPage('/')
  I.seeElement('#link-restaurant')

  const firstRestaurant = locate('#link-restaurant').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.click(firstRestaurant)

  I.seeElement('#favButton')
  I.click('#favButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.list-restaurant')
  I.see('Kota', '.city')

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title')
  assert.strictEqual(favoritedRestaurantTitle, firstRestaurantTitle)
})

Scenario('test user can make restaurant as unFavorited', async ({ I }) => {
  I.seeElement('.list-restaurant')
  I.see('Nothing here', '.items')

  I.amOnPage('/')
  I.seeElement('#link-restaurant')

  const firstRestaurant = locate('#link-restaurant').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.click(firstRestaurant)

  I.seeElement('#favButton')
  I.click('#favButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.list-restaurant')
  I.see('Kota', '.city')

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title')
  assert.strictEqual(favoritedRestaurantTitle, firstRestaurantTitle)

  const firstFavoritedRestaurant = locate('#link-restaurant').first()
  const firstFavoritedRestaurantLink = await I.grabAttributeFrom(firstFavoritedRestaurant, 'value')
  I.click(firstFavoritedRestaurant)
  I.amOnPage(`/#/detail/${firstFavoritedRestaurantLink}`)

  I.seeElement('#favButton')
  I.click('#favButton')

  I.amOnPage('/#/favorite')
  I.see('Nothing here', '.items')
})
