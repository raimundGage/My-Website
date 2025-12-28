export const ChomperSay = () => {
  let isDisplay = false;
  const chomperLine1 = <p>NOM! NOM!</p>;
  const chomperLine2 = <p>BUUURRRPP!</p>;

  if(isDisplay) {
    return chomperLine1;
  } else {
    return chomperLine2;
  };
};
