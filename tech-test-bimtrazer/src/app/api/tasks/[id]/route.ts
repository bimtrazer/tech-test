import { NextResponse } from "next/server";

interface Params {
  id: string;
}

export function GET(request: Request, { params }: { params: Params }) {
  return NextResponse.json({ message: `Obteniendo bloque ${params.id}` });
}

export function PUT(request: Request, { params }: { params: Params }) {
  return NextResponse.json({ message: `Actualizando bloque ${params.id}` });
}

export function DELETE(request: Request, { params }: { params: Params }) {
  return NextResponse.json({ message: `Eliminando bloque ${params.id}` });
}
