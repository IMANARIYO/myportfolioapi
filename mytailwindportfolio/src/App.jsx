import Homepage from './components/homepagecomponent/Homepage.jsx'
import HeadNavBar from './components/navigation/Navigation.jsx'
import Blog from './components/blogscomponent/BlogsComponents.jsx'
import { BlogsProvider } from './components/blogscomponent/BlogsContext.jsx'
import Resume from './resume/Resume.jsx'
import Projects from './components/projects/Projects.jsx'
import Features from './components/features/Features.jsx'
import Testimonial from './components/testimonies/Testimonial.jsx'
import Contact from './components/contact/contact/Contact.jsx'

import { useState } from 'react'
import LoginForm from './components/userscomponent/Login.jsx'

// import Testimonial from './components/testimonies/Testimonial.jsx'
export function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[openLogin,setOpenLogin ]=useState(false)

  const handleLogin = () => {
    setOpenLogin(true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, e.g., remove token from local storage and set isLoggedIn to false
    setIsLoggedIn(false);
  };
  return (
    <div>
      <HeadNavBar isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
      {openLogin && (<LoginForm />)}
   
      <Homepage />
      <Projects />
      <Features />
      <Testimonial />
      <BlogsProvider>
        <Blog />
      </BlogsProvider> 
      <Resume /> 
      <Contact />
{/* <LoginForm/>
<RegistrationForm/> */}
      {/* <Portfolio /> */} 
      {/* <Testimonial/> */}
      {/* <Clients /> */}
      {/* <TestimonyForm/> */}
      {/* <SingleBlogPost/>
            <Blogsmanagement />
            <LoginForm/>
            <Users /> */}
    </div>
  )
}
export default App
