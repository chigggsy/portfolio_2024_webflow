import './styles/style.css'
import pageGlobal from './pages/page_global'
import pageHome from './pages/page_home'
import pageProjects from './pages/page_projects'
import pageProjectsTemplate from './pages/page_projectsTemplate'

// Global Scripts
pageGlobal()

// Local Scripts
if (window.location.pathname === '/') {
  pageHome()
} else if (window.location.pathname === '/projects') {
  pageProjects()
} else if (window.location.pathname.startsWith('/projects/')) {
  pageProjectsTemplate()
}
