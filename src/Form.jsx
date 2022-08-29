import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  console.log("Form component rendered!");
  return <input onChange={(e) => setName(e.target.value)} placeholder="name" />;
};

export default Form;
