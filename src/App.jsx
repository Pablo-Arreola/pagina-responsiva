import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Home />
        <Contact />
      </main>

      <footer className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-2xl font-bold mb-2">Sígueme</h3>

          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://github.com/Pablo-Arreola"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform hover:scale-110"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.comhttps://www.linkedin.com/in/pablo-arreola-5b5469376?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform hover:scale-110"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>

          <p className="text-sm text-blue-100 mt-6">
            © {new Date().getFullYear()} Pablo Arreola · Todos los derechos reservados.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full animate-pulse"></div>
      </footer>
    </div>
  );
}
