import { useState } from "react";

const BgProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  console.log("BgProvider component rendered!");

  return (
    <div style={{ backgroundColor }}>
      <input
        onChange={(e) => setBackgroundColor(e.target.value)}
        placeholder="enter a color"
      />
      {children}
    </div>
  );
};

export default BgProvider;
