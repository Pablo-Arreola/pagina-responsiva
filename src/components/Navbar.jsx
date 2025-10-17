import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-3">
      <h1 className="text-2xl font-bold">MiLogo</h1>

      {/* Botón hamburguesa móvil */}
      <button
        className="text-3xl md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Enlaces */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } absolute md:static top-14 left-0 w-full md:w-auto flex-col md:flex md:flex-row md:space-x-6 bg-blue-600 md:bg-transparent`}
      >
        <li><a href="#" className="block px-4 py-2 hover:bg-blue-500 md:hover:bg-transparent">Inicio</a></li>
        <li><a href="#" className="block px-4 py-2 hover:bg-blue-500 md:hover:bg-transparent">Acerca</a></li>
        <li><a href="#" className="block px-4 py-2 hover:bg-blue-500 md:hover:bg-transparent">Servicios</a></li>
        <li><a href="#" className="block px-4 py-2 hover:bg-blue-500 md:hover:bg-transparent">Contacto</a></li>
      </ul>
    </nav>
  );
}
