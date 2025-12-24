import { Button } from './pieces/Button';
import { Marquee } from './pieces/Marquee';
import { RetroWindow } from './components/RetroWindow';
import { Window } from './components/Window';

function App() {
  const favorites = [
    {icon: "🐯", name: "Grantly Bell",    from:             "Knights College"},
    {icon: "🐺", name: "Albert",          from: "Intermarché - Conte de Noël"},
    {icon: "🐲", name: "Cold Snapdragon", from: "Plants VS Zombies 2"},
  ];

  return (
    <article className="App">
      <section>
        <div>
          {favorites.map((favs) => {
            return <Marquee icon={favs.icon} name={favs.name} from={favs.from} />
          })}
        </div>

        <Button buttonText={"mrowwww"}/>
      </section>

      <RetroWindow title={"some_cats"} imageSource={"https://pbs.twimg.com/media/G803GDrb0AA6H-M?format=jpg&name=large"} />
          
      <div className='mt-10'/>
      <Window title={""}/>
    </article>
  )
}

export default App;
