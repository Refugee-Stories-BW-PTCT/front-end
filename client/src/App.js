import React from "react";
<<<<<<< HEAD
import Home from "./component/layout/home/Home";
import Admin from "./component/admin/Admin";
import Register from "./component/register/Register";
import StoryList from "./component/stories/StoryList";
import SubmitStory from "./component/stories/SubmitStory";
import PendingStories from "./component/stories/PendingStories";
import MyCarousel from "./component/carousel/MyCarousel";
=======
import SignIn from "./components/signin/SignIn";
import PrivateRoute from "./utils/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
>>>>>>> 608258dabf8b408c5cd8969699fca6d4ebee0de5

// router
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./component/login/Login";

<<<<<<< HEAD
// Private Route
import { PrivateRoute } from "./utils/PrivateRoute";
=======

import Home from "./components/Home/Home";

import Stories from "./components/Stories/Stories";

import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import "typeface-roboto";
>>>>>>> 608258dabf8b408c5cd8969699fca6d4ebee0de5

function App() {
  const Logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/login" />;
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />

        <Route exact path="/login" component={Login} />
        <Route exact path="/stories" component={StoryList} />
        <Route exact path="/admin" render={props => <Admin {...props} />} />

        <PrivateRoute to="/submitStory" component={SubmitStory} />
        <Route
          exact
          path="/pending"
          render={props => <PendingStories {...props} />}
        />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>

    </>
  );
}

export default App;
