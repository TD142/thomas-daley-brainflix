import VideoDetailsPage from "./components/pages/videodetailspage/VideoDetailsPage";
import { UploadPage } from "./components/pages/uploadpage/UploadPage";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ErrorPage } from "./components/pages/errorpage/ErrorPage";

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
            <Route path="/upload" exact component={UploadPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
