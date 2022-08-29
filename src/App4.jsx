import { useEffect, useMemo, useState } from "react";
import MemoizedExpensive from "./MemoizedExpensive";

function App4() {
  const [text, setText] = useState("");

  console.log("component rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <MemoizedExpensive />
    </div>
  );
}

export default App4;
