import { useEffect, useState } from "react";
import BlockForm from "./components/BlockForm";
import { getBLocks } from "./services/api";
import BlockList from "./components/BlockList";

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
      <BlockForm />
      {blocks.length === 0 ? <p>loading</p> : <BlockList blocks={blocks} />}
    </div>
  );
}

export default App;
