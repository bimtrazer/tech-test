import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import Block from "@/models/Block";

interface Params {
  id: string;
}

// Método GET by id => Muestra el bloque seleccionado
export async function GET({ params }: { params: Params }) {
  try {
    connectDB();
    const blockFound = await Block.findById(params.id);

    if (!blockFound)
      return NextResponse.json(
        {
          message: "Block not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(blockFound);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

// Método PUT by id => Edita el bloque seleccionado
export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    const data = await request.json();
    const blockUpdated = await Block.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(blockUpdated);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

// Método DELETE by id => Elimina el bloque seleccionado
export async function DELETE({ params }: { params: Params }) {
  try {
    const blockDelete = await Block.findByIdAndDelete(params.id);

    if (!blockDelete)
      return NextResponse.json(
        {
          message: "Block not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(blockDelete);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
