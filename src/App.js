import { NavBar } from "./components/NavBar/NavBar";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
