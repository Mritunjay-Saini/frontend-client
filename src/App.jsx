import { useState } from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const clicked = async () => {
    const response = prompt("Enter your name");
    try {
      const res = await axios.get(`http://localhost:5000/${response}`);
      setData(res.data); // Assuming server returns a color like "red", "#f0f0f0", etc.
      console.log(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: data, height: "100vh" }}>
        <h2>Background Color: {data}</h2>
        <button onClick={clicked}>Click</button>
      </div>
    </>
  );
}

export default App;
