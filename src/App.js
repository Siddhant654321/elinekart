import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App