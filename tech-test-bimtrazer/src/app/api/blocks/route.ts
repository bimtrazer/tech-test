import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import Block from "@/models/Block";

// Método GET => Muestra todos los bloques existentes
export async function GET() {
  connectDB();
  const blocks = await Block.find();

  return NextResponse.json(blocks);
}

// Método POST => Crea un nuevo bloque
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newBlock = new Block(data);
    const savedBlock = await newBlock.save();

    return NextResponse.json(savedBlock);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
