import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  // Animación de entrada al hacer scroll
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fadeInUp");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Contenido */}
      <div
        ref={ref}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 sm:p-12 border border-blue-100"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Contáctame
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-left text-gray-700 font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-left text-gray-700 font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
