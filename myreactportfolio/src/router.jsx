import { createBrowserRouter } from 'react-router-dom'

import Profile from './components/userscomponent/Profile.jsx'
import Users from './components/userscomponent/Users.jsx'
import Testimonials from './components/testimonies/testimony.jsx'
import Portfolio from './components/portfoliocomponent/Portfolio.jsx'
import Blog from './components/blogscomponent/BlogsComponents.jsx'
import Clients from './components/clients/Clients.jsx'
import Contact from './components/contact/Contactcomponent.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import LoginForm from './components/userscomponent/Login.jsx'
import SingleBlogPost from './components/blogscomponent/SingleBlog.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/users/:id',
    element: <Profile />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/testimonies',
    element: <Testimonials />
  },
  {
    path: '/portifolio',
    element: <Portfolio />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/clients',
    element: <Clients />
  },
  {
    path: '/dashboard',
    element: <Dashboard/>

  },
  {
    path: '/login',
    element: <LoginForm/>

  },
  {
    path: '/singleBlog',
    element: <SingleBlogPost/>

  }

])

export default router
