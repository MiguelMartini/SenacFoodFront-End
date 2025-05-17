import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CacthingData from './Components/CacthingData.jsx'
import { CreateUser } from './Components/CreateUser.jsx'
import { UserLogin } from './Components/UserLogin.jsx'
import { Logado } from './Components/Logado.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import { CreateRecipe } from './Components/Receitas/CreateRecipe.jsx'
import { Favorites } from './Components/Receitas/Favorites.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CacthingData/>
  },
  {
    path: "/registrar",
    element: <CreateUser/>
  },{
    path: "/login",
    element: <UserLogin/>
  },
  {
    element: <PrivateRoute/>, 
    children: [
      {
        path: "/logado",
        element: <Logado/>
      }
    ]
  },{
    element: <PrivateRoute/>,
    children: [
      {
        path: "/criarReceita",
        element: <CreateRecipe/>
      }
    ]
  },{
    element: <PrivateRoute/>,
    children: [
      {
        path: "/favoritos",
        element: <Favorites/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
