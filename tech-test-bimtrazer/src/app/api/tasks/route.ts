import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Obteniendo bloques...",
  });
}

export function POST() {
  return NextResponse.json({
    message: "Creando bloque...",
  });
}
