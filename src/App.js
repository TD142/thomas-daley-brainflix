import VideoDetailsPage from "./components/pages/VideoDetailsPage";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={VideoDetailsPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
