import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./Components/About";
//import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// React Element

//const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

// JSX Syntax. Babel transpiles it to react.Createelement.
// const heading = (<h1 className="h1class" id="heading">Namaste React</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // React Title component.
// const Title = () => (<h1> Title </h1>);

// const number = 10;
// // React Components.
// const HeadingComponent = () => {
//   return (<div>
//     <Title />
//     <h2>{number}</h2>
//     <h1 className="heading">Namaste react functional component</h1>
//     </div>
//   );
// }

// // Convert React element to html markup and replace everthing added in root element.
// root.render(<HeadingComponent />);

//

const About = lazy(() => import("./Components/About"));

const App = () => {
    const [userName, setUserName] = useState();

    //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Dipayan Pramanik",
    };
    setUserName(data.name);
  }, []);

    return (
        <Provider store={appStore}>
            <div className="app">
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </div>
        </Provider>
    );
  };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// Children Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
        path: "/",
        element: <Body />,
    },
    {
        path: "/about",
        element: <Suspense fallback={<h1> Its Loading </h1>}><About /></Suspense>,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
    },
    ],
    errorElement: <Error />,
  },
  {
    path: "/hello",
    element: <h1>Hello, World!!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);