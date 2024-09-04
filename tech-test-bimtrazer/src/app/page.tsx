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
    <div className="grid grid-cols-3 gap-2">
      {blocks.map((block) => (
        <BlockCard block={block} key={block._id} />
      ))}
    </div>
  );
}

export default Home;
