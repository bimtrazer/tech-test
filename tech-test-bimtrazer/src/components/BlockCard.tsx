import { IBlock } from "@/interface/block.interface";
import Link from "next/link";

function BlockCard({ block }: { block: IBlock }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES").format(date);
  };

  return (
    <Link href={`/blocks/${block._id}`}>
      <div className="bg-gray-800 p-10 twxt-white rounded-md hover:cursor-pointer hover:bg-gray-700 shadow-md shadow-gray-800">
        <h3 className="text-center text-xl mb-2 font-semibold">
          {block.description}
        </h3>
        <div className="my-3 flex flex-col text-center gap-2">
          <p className="font-extralight">
            <span className="font-medium">Fecha de inicio:</span>{" "}
            {formatDate(block.startDate)}
          </p>
          <p className="font-extralight">
            <span className="font-medium">Fecha de Finalización:</span>{" "}
            {formatDate(block.endDate)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
          <div
            className="postgress-bar"
            style={
              { "--fill-size": `${block.progress}%` } as React.CSSProperties
            }></div>
          <span>{block.progress}% completado</span>
        </div>
      </div>
    </Link>
  );
}

export default BlockCard;
