import { useEffect, useState } from "react";
import BlockForm from "./components/BlockFrom/BlockForm";
import { getBLocks } from "./services/api";
import BlockList from "./components/BlockList/BlockList";
import "./App.css"
function App() {
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const response = await getBLocks();
        setBlocks(response);
      } catch (error) {
        console.error("Error fetching blocks:", error);
      }
    };

    fetchBlocks();
  }, []);

  return (
    <div>
      <h1>Bienvenido al mundo de los bloques!🤩</h1>
      {blocks.length === 0 ? <p>loading</p> : <BlockList blocks={blocks} />}
      <h2>Crea un nuevo bloque 🛠️</h2>
      <BlockForm />
    </div>
  );
}

export default App;
