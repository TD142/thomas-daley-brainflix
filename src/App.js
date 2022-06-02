import VideoDetailsPage from "./components/pages/VideoDetailsPage";
import { UploadPage } from "./components/pages/UploadPage";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toaster />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={VideoDetailsPage} />
            <Route path="/videos/:videoId" component={VideoDetailsPage} />
            <Route path="/upload" component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
