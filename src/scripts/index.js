import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const mobileNavButton = document.getElementById('mobile-nav-button')

mobileNavButton.addEventListener('click', () => {
  document.querySelector('#menu').classList.toggle('active')
  document.querySelector('.mobile-bar').classList.toggle('active')
})

const app = new App({
  skipToContent: document.querySelector('#skipToContent'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  document.querySelector('#content').scrollIntoView()
  app.renderPage()
})

window.addEventListener('load', () => {
  const loader = document.getElementById('loading')
  loader.style.display = 'flex'
  app.renderPage()
  swRegister()
})
