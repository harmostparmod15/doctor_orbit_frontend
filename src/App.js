import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Components
import Hero from "./components/Hero";
import UserSignIn from "./components/UserSignIn";
import Doctors from "./components/Doctors";
import Body from "./components/Body";
import DoctorDetail from "./components/DoctorDetail";
import UserSignUp from "./components/UserSignUp";
import Booking from "./components/Booking";
import { AdminSignIn } from "./components/AdminSignIn";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },
  {
    path: "user/signin",
    element: <UserSignIn />,
  },
  {
    path: "/user/signup",
    element: <UserSignUp />,
  },
  {
    path: "/user/me",
    element: <UserDashboard />,
  },
  {
    path: "/admin/signin",
    element: <AdminSignIn />,
  },
  {
    path: "/admin/me",
    element: <AdminDashboard />,
  },
  {
    path: "/doctor/:id",
    element: <DoctorDetail />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
