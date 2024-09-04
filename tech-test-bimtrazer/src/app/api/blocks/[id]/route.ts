import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import Block from "@/models/Block";

interface Params {
  id: string;
}

// Método GET by id => Muestra el bloque seleccionado
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    await connectDB();
    const blockFound = await Block.findById(params.id);

    if (!blockFound)
      return NextResponse.json({ message: "Block not found" }, { status: 404 });

    return NextResponse.json(blockFound, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

// Método PUT by id => Edita el bloque seleccionado
export async function PUT(request: Request, { params }: { params: Params }) {
  try {
    await connectDB();
    const data = await request.json();
    const blockUpdated = await Block.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!blockUpdated)
      return NextResponse.json({ message: "Block not found" }, { status: 404 });

    return NextResponse.json(blockUpdated, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

// Método DELETE by id => Elimina el bloque seleccionado
export async function DELETE(request: Request, { params }: { params: Params }) {
  try {
    const blockDelete = await Block.findByIdAndDelete(params.id);

    if (!blockDelete)
      return NextResponse.json({ message: "Block not found" }, { status: 404 });

    return NextResponse.json(blockDelete, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
