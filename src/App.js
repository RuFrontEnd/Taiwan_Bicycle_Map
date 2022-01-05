import React, { useState, useEffect, lazy, Suspense } from "react";
import "App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { setAxiosDefaultURL } from "utils/data";
import Page from "pages/Page";
import { CSSTransition } from "react-transition-group";
import Navbar from "components/Navbar";
import Station from "pages/Station.tsx";

setAxiosDefaultURL("https://swin-opendata.herokuapp.com/api/v1/data/");

const routes = [
  {
    component: <Station />,
    path: "/",
  },
];

const navbarProps = {
  buttonInfos: [
    { path: "/", text: "Youbike 租借站點" },
    { path: "/availability", text: "自行車路線" },
    { path: "/foodAttractions", text: "美食景點" },
  ],
};
// const page = lazy(() => import("pages/page/page"));

// routes
function App() {
  return (
    <Router>
      {/* <Suspense fallback={<FallBack />}> */}
      <Navbar {...navbarProps} />
      {/* <ScrollToTop /> */}
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path}>
            {route.component}
          </Route>
        ))}
        {/* <Redirect to={routes[0].path} /> */}
      </Switch>
      {/* </Suspense> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
