import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ content }) {
    this._content = content
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    await page.onWillMount()
    this._content.innerHTML = await page.render()
    await page.onMounted()
  }
}

export default App
