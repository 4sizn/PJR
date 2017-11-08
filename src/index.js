import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Register, Profile, ChatManager } from "./containers";
import { Header, Chart } from "./components";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"; //비동기 처리 미들웨어 - AJAX와 별도 action 구현

//BootStrap.css
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/Register" component={Register} />
          <Route path="/chat" component={ChatManager} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  rootElement
);
