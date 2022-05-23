import { useEffect, useState } from "react";
import Box from "./Box";

function App() {
  const [qoute, setQoute] = useState(null);

  const getQoute = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQoute(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQoute();
  }, []);

  return (
    <div className="App">
      <Box onclick={getQoute} qoutes={qoute} />
    </div>
  );
}

export default App;
