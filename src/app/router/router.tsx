import AuthorizeContext from '../../components/AuthorizeContext/AuthorizeContext'
import { createBrowserRouter } from 'react-router-dom'
import { Autoriz } from '../../pages/authoriz/Authoriz'
import { Messager } from '../../pages/messager/Messager'

export const router = createBrowserRouter([
  {
    path: "",
    element: <AuthorizeContext />,
    children: [
        {
          path: "",
          element: <Messager />
        }    
    ]
  },
  {
    path: "/login",
    element: <Autoriz />
  }
])
