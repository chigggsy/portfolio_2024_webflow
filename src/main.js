import './styles/style.css'
import pageGlobal from './pages/page_global'
import pageHome from './pages/page_home'

// Global Scripts
pageGlobal()

// Local Scripts
if (window.location.pathname === '/') {
  pageHome()
}
