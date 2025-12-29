import { ChomperLine1 } from "../lines/ChomperLine1";
import { ChomperLine2 } from "../lines/ChomperLine2";

export const ChomperSay = () => {
  let isDisplay = false;

  return isDisplay ? <ChomperLine1 /> : <ChomperLine2 />;
};
