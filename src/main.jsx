import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateUser } from './Components/Users/CreateUser.jsx'
import { UserLogin } from './Components/Users/UserLogin.jsx'
import { Logado } from './Components/Users/Logado.jsx'
import PrivateRoute from './layout/PrivateRoute.jsx'
import { CreateRecipe } from './Components/Receitas/CreateRecipe.jsx'
import { ListarReceitas } from './Components/Receitas/ListarReceitas.jsx';
import { Receita } from './Components/Receitas/Receita.jsx'
import { EditarReceita } from './Components/Receitas/EditarReceita.jsx'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
  }, {
    element: <PrivateRoute/>,
    children: [
      {
        path: "/listarReceitas",
        element: <ListarReceitas/>
      }
    ]
  },{
    element: <PrivateRoute/>,
    children: [
      {
        path: "/receita/:id",
        element: <Receita/>
      }
    ]
  },{
    element: <PrivateRoute/>,
    children: [
      {
        path: "/editarReceita/:id",
        element: <EditarReceita/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
