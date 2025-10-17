import { useEffect, useRef } from "react";

export default function Card({ title, content }) {
  const ref = useRef(null);

  // Animación cuando la tarjeta entra al viewport
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
    <div
      ref={ref}
      className="opacity-0 bg-gradient-to-br from-white to-blue-50 
      rounded-2xl shadow-md p-6 
      hover:shadow-xl transition-transform duration-300 
      hover:-translate-y-2 hover:scale-[1.02] border border-blue-100"
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
