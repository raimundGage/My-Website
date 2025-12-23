import { Button } from './pieces/Button';
import { Marquee } from './pieces/Marquee';

function App() {
  const favorites = [
    {icon: "🐯", name: "Grantly Bell",    from:             "Knights College"},
    {icon: "🐺", name: "Albert",          from: "Intermarché - Conte de Noël"},
    {icon: "🐲", name: "Cold Snapdragon", from: "Plants VS Zombies 2"},
  ];

  return (
    <section className="App">
      <article>
        <div>
          {favorites.map((favs) => {
            return <Marquee icon={favs.icon} name={favs.name} from={favs.from} />
          })}
        </div>

        <Button buttonText={"mrowwww"}/>
      </article>
    </section>
  )
}

export default App;
