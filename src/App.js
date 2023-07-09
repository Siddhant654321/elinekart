import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";

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
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App