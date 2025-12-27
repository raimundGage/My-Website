export const ConditionalRender = () => {
  let chomperLine;
  const isDisplay = false;

  if (isDisplay) {
    chomperLine = <p>NOM! NOM! NOM!</p>;
  } else {
    chomperLine = <p>CHOMP! CHOMP! CHOMP!</p>;
  };

  return (
    <section>
      <div>{chomperLine}</div>
    </section>
  );
};
