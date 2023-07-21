import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/register', element: <Register /> },
      { path: '/product/:id', element: <ProductPage /> },
      { path: '/cart', element: <Cart /> },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App