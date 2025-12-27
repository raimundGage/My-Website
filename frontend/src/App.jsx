import { Plants } from "./components/Plants";
import { ConditionalRender } from "./components/ConditionalRender";

function App() {
  return (
    <section className="App">
      <Plants />
      <ConditionalRender />
    </section>
  );
}

export default App;
