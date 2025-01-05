import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Layout from "../Component/Layout/Layout";
import Initiatives from "../Pages/Initiatives/Initiatives";
import Contact from "../Pages/Contact/Contact"
import Gallery from "../Pages/Gallery/Gallery";

const Gateway = () => {
  return (
    <>
     <Layout>
      <Outlet />
    </Layout>
    </>
  );
};

const routes = createBrowserRouter([
  {
    element: <Gateway />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/initiatives",
        element: <Initiatives />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
