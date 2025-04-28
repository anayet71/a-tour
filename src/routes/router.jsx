import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cox from "../components/layout-component/Cox";
import Banner from "../components/layout-component/Banner"; // Optional if you want this route separate
import Login from "../components/layout-component/Login";
import Register from "../components/layout-component/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: 'cox',
        element: <Cox />
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]
  }
]);

export default router;
