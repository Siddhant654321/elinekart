import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import PlaceOrder from "./components/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import AllProducts from "./components/AllProducts";

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
      { path: '/products', element: <AllProducts /> },
      { path: '/products/search/:keyword', element: <AllProducts /> },
      { path: '/products/page/:pageNumber', element: <AllProducts /> },
      { path: '/products/search/:keyword/page/:pageNumber', element: <AllProducts /> },
      { path: '/product/:id', element: <ProductPage /> },
      { path: '/cart', element: <Cart /> },
      { path: '', element: <PrivateRoute />, children: [
        { path: '/shipping', element: <Shipping />},
        { path: '/payment', element: <Payment />},
        { path: '/placeorder', element: <PlaceOrder />},
        { path: '/profile', element: <Profile />},
      ]},
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App