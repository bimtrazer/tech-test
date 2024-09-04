"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container flex justify-between items-center px-10 md:px-0 mx-auto">
        <Link href={"/"}>
          <h1 className="font-bold text:xl md:text-2xl">
            Bimtrazer - Tech test
          </h1>
        </Link>
        <ul className="flex gap-x-4 text-sm md:text-lg">
          {pathname === "/" ? (
            <Link href={"/blocks/new"}>
              <li>Crear Bloque</li>
            </Link>
          ) : (
            <Link href={"/"}>
              <li>Lista de Bloques</li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
