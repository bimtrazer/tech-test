import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import { IBlock } from "@/interface/block.interface";
import Block from "@/models/Block";

// Método GET => Muestra todos los bloques existentes
export async function GET() {
  try {
    await connectDB();
    const blocks = await Block.find();

    return NextResponse.json(blocks);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

// Método POST => Crea un nuevo bloque
export async function POST(request: Request) {
  try {
    const data: IBlock = await request.json();
    const newBlock = new Block(data);
    const savedBlock = await newBlock.save();

    return NextResponse.json(savedBlock);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
