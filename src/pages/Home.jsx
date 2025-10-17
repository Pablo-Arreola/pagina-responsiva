import Card from "../components/Card";

export default function Home() {
  const cards = [
    { title: "Diseño Web", content: "Sitios modernos y adaptativos." },
    { title: "Desarrollo Frontend", content: "React, Tailwind, Vite y más." },
    { title: "Optimización SEO", content: "Haz que te encuentren fácilmente." },
  ];

  return (
    <main
      id="servicios"
      className="relative py-20 px-6 sm:px-10 lg:px-20 
      bg-gradient-to-b from-gray-50 via-white to-blue-50 
      text-center overflow-hidden"
    >
      {/* Título animado */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-14 animate-fadeIn">
        Nuestros Servicios
      </h2>

      {/* Cuadrícula responsiva */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <Card key={i} title={c.title} content={c.content} />
        ))}
      </div>

      {/* Detalle decorativo */}
      <div className="absolute -top-24 -right-32 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
    </main>
  );
}
