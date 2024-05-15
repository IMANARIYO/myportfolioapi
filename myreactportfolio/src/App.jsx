import { useState } from 'react'
import"slick-carousel/slick/slick.css"
import Homepage from './components/homepagecomponent/Homepage'
import HeadNavBar from './components/navigation/Navigation'

import Blog from './components/blogscomponent/BlogsComponents'
import Clients from './components/clients/Clients'
import Contact from './components/contact/Contactcomponent'
import Testimonials from './components/testimonies/testimony'
import Portfolio from './components/portfoliocomponent/Portfolio'
import Dashboard from './dashboard/Dashboard'
import Users from './components/userscomponent/Users'
import UserModal from './components/userscomponent/Usermodal'
import UserForm from './components/userscomponent/UserForm'
import SingleBlogPost from './components/blogscomponent/SingleBlog'
import Blogsmanagement from './components/blogscomponent/Blogsmanagement'
import { BlogsProvider } from './components/blogscomponent/BlogsContext'
import LoginForm from './components/userscomponent/Login'
import BlogForm from './components/blogscomponent/BlogForm'
import TestimonyForm from './components/testimonies/TestimoniesForm.jsx'
import Testimonial from './components/testimonies/Testimonial.jsx'

function App () {
  return (
    <div>
 <HeadNavBar/>
  <Homepage/>
  <Portfolio/>
  <Testimonials/>
  {/* <Testimonial/> */}
     <BlogsProvider>
      <Blog/>
      </BlogsProvider> 
  <Clients/>
  <Contact/>
{/* <TestimonyForm/> */}
      {/* <SingleBlogPost/>
      <Blogsmanagement />
      <LoginForm/>
      <Users /> */}
    </div>
  )
}

export default App
