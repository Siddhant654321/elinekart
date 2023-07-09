import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App