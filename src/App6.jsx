import { useEffect, useMemo, useState } from "react";
import Expensive from "./Expensive";
import BgProvider from "./BgProvider";

const App6 = () => {
  console.log("App6 component rendered!");

  return (
    <BgProvider>
      <Expensive />
    </BgProvider>
  );
};

export default App6;
