import Detail from '../views/pages/detail'
import Home from '../views/pages/home'
import Favorite from '../views/pages/favorite'

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite
}

export default routes
