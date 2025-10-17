export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full 
      bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Capa oscura superpuesta */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl px-6 animate-fadeIn">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Bienvenido a Mi Página Responsiva
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Diseño moderno, adaptable y optimizado con React + Tailwind v4.
        </p>
        <a
          href="#servicios"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 
          rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          Ver más
        </a>
      </div>

      {/* Efecto de niebla animada */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </section>
  );
}
