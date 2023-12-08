import './App.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Cart from './Cart.jsx';
import Home from './Home.jsx';
import './index.css';
import Shop from './Shop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "shop",
    element: <Shop />
  }
])

function App() {

  return (  
    <RouterProvider router={router}/>
  )
}

export default App
