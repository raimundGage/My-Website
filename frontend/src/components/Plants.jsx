import { Plant } from './Plant';

export const Plants = () => {
  let myPlants = [
    {
      plantType       : "Primal Peashooter",
      plantName       : "Ralph",
      cost            : 175,
      mintFamilyEmoji : "🔫"
    },
    {
      plantType       : "Parsnip",
      plantName       : "Billy",
      cost            : 125,
      mintFamilyEmoji : "👊"
    },
    {
      plantType       : "Hurrikale",
      plantName       : "Rando",
      cost            : 100,
      mintFamilyEmoji : "❄️"
    }
  ];

  return (
    <>
      {myPlants.map((plant) => {
        return (
          <Plant key={plant.plantType}
          plantType={plant.plantType} plantName={plant.plantName} 
          cost={plant.cost} mintFamilyEmoji={plant.mintFamilyEmoji} />
        );
      })}
    </>
  );
};
