import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import GetHelp from "./Containers/GetHelp";
import HomePage from "./Containers/HomePage";
import Layout from "./Components/Layout";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import OrderStatus from "./Containers/OrderStatus";
import TermsCondition from "./Containers/TermsCondition";
import Returns from "./Containers/Returns";
import Care from "./Containers/Care";
import Notes from "./Containers/Blogs/Notes";
import NotesComment from "./Containers/Blogs/NotesComments";
import Production from "./Containers/Production";
import Cart from "./Containers/Cart";
import College from "./Containers/College";
import Enterprise from "./Containers/Enterprise";
import AboutUs from "./Containers/AboutUs";
import School from "./Containers/School/School";
import SchoolGoods from "./Containers/School/SchoolGoods";
import Account from "./Containers/Accounts/Account";
import ProductDetails from "./Containers/School/ProductDetails";
import Checkout from "./Containers/Checkout";
import AirenMask from "./Containers/AirenMask";
import VendorDetails from "./Containers/VendorDetails";
import Paynow from "./Containers/Paynow";

const RoutePath = () => {

  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/user/login", element: <Login /> },
    { path: "/user/register", element: <Register /> },
    { path: "/page/get-help", element: <GetHelp /> },
    { path: "/page/order-status", element: <OrderStatus /> },
    { path: "/page/terms-condition", element: <TermsCondition /> },
    { path: "/page/returns", element: <Returns /> },
    { path: "/page/care", element: <Care /> },
    { path: "/page/production", element: <Production /> },
    { path: "/page/college", element: <College /> },
    { path: "/page/enterprise", element: <Enterprise /> },
    { path: "/page/about-us", element: <AboutUs /> },
    { path: "/page/school", element: <School /> },
    { path: "/browse/:school", element: <SchoolGoods /> },
    { path: "/blog", element: <Notes /> },
    { path: "/blog/:page", element: <NotesComment /> },
    { path: "/cart", element: <Cart /> },
    { path: "/account/:profile", element: <Account /> },
    { path: "/product/airen-mask", element: <AirenMask /> },
    { path: "/product/:item", element: <ProductDetails /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/vendor/:id", element: <VendorDetails /> },
    { path: "/sellers/:id", element: <VendorDetails type="sellers" /> },
    { path: "/paynow", element: <Paynow /> },
  ]);
  return routes;
};

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <RoutePath />
      </Layout>
    </Router>
  );
};

export default AppRouter;