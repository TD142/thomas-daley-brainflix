import { Header } from "./components/header/Header";

import comments from "./data/video-details.json";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />

      <Main comments={comments} />
    </div>
  );
}

export default App;
