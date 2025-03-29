import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dummy from './components/dummy.jsx'
import Users from './components/dummy.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>
},
{
  path:"/users/:id",
  element:<Users/>
},
{
  path:"/dummy",
  element:<Dummy/>
}
,{
  path:"*",
  element:<div>page not found</div>
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
