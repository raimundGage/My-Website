import Marquee from './pieces/Marquee';
import Button from './pieces/Button';

function App() {
  return (
    <section className="App">
      <Marquee marqueeText={"+++ woof woof woof +++"}/>

      <Button buttonText={"klik me!"}/>
    </section>
  )
}

export default App;
