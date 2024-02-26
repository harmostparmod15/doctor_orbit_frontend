import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import UserSignIn from "./components/UserSignIn";
import Doctors from "./components/Doctors";
import Body from "./components/Body";

const HeroAndFooter = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HeroAndFooter />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
    ],
  },
  {
    path: "user/signin",
    element: <UserSignIn />,
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
