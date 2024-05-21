import { About } from './components/aboutpage/About'
import { Contact } from './components/contactpage/Contact'
import { Home } from './components/homepage/Home'
import { Services } from './components/servicespage/Services'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]

export default AppRoutes