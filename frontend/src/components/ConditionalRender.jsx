import { Greetings } from "./Greetings";
import { Howdy } from "./Howdy";

export const ConditionalRender = () => {
  let isDisplayComponent = true;
  let isDisplayJSX = true;

  /* 
  if (isDisplayJSX) {
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
 */

  if (isDisplayComponent) {
    return (
      <section>
        <Greetings />
      </section>
    );
  } else {
    return (
      <section>
        <Howdy />
      </section>
    );
  }
};
