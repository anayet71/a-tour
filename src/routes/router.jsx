import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cox from "../components/layout-component/Cox";
import Banner from "../components/layout-component/Banner"; // Optional if you want this route separate
import Login from "../components/layout-component/Login";

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
      }
    ]
  }
]);

export default router;
