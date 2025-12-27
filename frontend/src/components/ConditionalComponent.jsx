export const ConditionalComponent = () => {
  let isDisplay = true;

  if (isDisplay) {
    return (
      <section>
        <h3>Hey,hey ,hey! You found Me! 🐊</h3>
      </section>
    );
  } else {
    return (
      <section>
        <p>Mmm.. yeah. I really don't got anything else to say!</p>
      </section>
    );
  }
};
