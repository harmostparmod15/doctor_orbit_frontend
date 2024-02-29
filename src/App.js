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
