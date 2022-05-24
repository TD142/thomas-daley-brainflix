import { Header } from "./components/header/Header";

import data from "./data/video-details.json";
import { Main } from "./components/main/Main";
import React from "react";

console.log(data[0].image);
class App extends React.Component {
  state = {
    videos: data[0],
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Main videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
