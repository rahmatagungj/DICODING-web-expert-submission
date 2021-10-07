/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
Feature('HomePage')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('test user can see homepage', async ({ I }) => {
  I.seeElement('#link-restaurant')

  const firstRestaurant = locate('#link-restaurant').first()

  I.click(firstRestaurant)

  I.seeElement('.all-menus-title')
})
