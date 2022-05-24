import { NavBar } from "./components/NavBar/NavBar";
import { Form } from "./components/Form/Form";
import { Comments } from "./components/Comments/Comments";
import comments from "./data/video-details.json";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Form />
        <Comments comments={comments} />
      </main>
    </div>
  );
}

export default App;
