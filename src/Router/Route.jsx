import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const useCustomeRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donate.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/donate.json"),
      },
      {
        path: "/donations",
        element: <Donation />,
        loader: () => fetch("/donate.json"),
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: () => fetch("/donate.json"),
      },
    ],
  },
]);

export default useCustomeRoute;
