export const Plant = ({ plantType, plantName, cost, mintFamilyEmoji }) => {
  return (
    <>
      { cost > 100 ? (
        <li> Species: {mintFamilyEmoji} {plantType}<br/> Name: {plantName}<br/> Cost: {cost}<br/> </li>
      ) : (
        ""
      )}
    </>
  );
};
