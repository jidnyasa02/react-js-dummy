import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [product, setProduct] = useState(0);

  const fetData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("data", data);
    setProduct(data);
  };

  return (
    <>
      <div>helo</div>
    </>
  );
}

export default App;
