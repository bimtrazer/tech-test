import Block from "@/models/Block";
import { connectDB } from "@/utils/mongodb";
import { IBlock } from "@/interface/block.interface";
import BlockCard from "@/components/BlockCard";

async function loadBlocks(): Promise<IBlock[]> {
  connectDB();
  const blocks = await Block.find();
  return blocks;
}

async function Home(): Promise<JSX.Element> {
  const blocks: IBlock[] = await loadBlocks();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Listado de Bloques
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((block) => (
          <BlockCard block={block} key={block._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
