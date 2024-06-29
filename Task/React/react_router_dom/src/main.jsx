import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import SignIn from './components/SignIn_or_SignUp/Login.jsx'
import Login from './components/SignIn_or_SignUp/Login.jsx'
import SignUp from './components/SignIn_or_SignUp/SignUp.jsx'

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {path:'',
//         element:<Home/>
//       },{
//         path:'about',
//         element:<About/>
//       },{
//         path:'contact',
//         element:<Contact/>
//       },
//       {
//         path:'github',
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
