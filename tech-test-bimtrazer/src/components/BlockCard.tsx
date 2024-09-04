import { IBlock } from "@/interface/block.interface";
import Link from "next/link";

function BlockCard({ block }: { block: IBlock }) {
  return (
    <Link href={`/blocks/${block._id}`}>
      <div className="bg-gray-800 p-10 twxt-white rounded-md hover:cursor-pointer hover:bg-gray-700">
        <h3>Descripción: {block.description}</h3>
        <p>Fecha de inicio: {block.startDate}</p>
        <p>Fecha de Finalización: {block.endDate}</p>
        <div>Progreso: {block.progress}</div>
      </div>
    </Link>
  );
}

export default BlockCard;
