import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#5b1212] text-white py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} A Su Manera. Todos los derechos reservados.</p>
        
        <div className="flex gap-4">
          <a
            href="https://wa.me/584142218169"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f1e7] transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/asumanera.catering/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f1e7] transition"
          >
            Instagram
          </a>
          <a
            href="#sobre-nosotros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f1e7] transition"
          >
            Sobre Nosotros
          </a>
        </div>
      </div>
    </footer>
  );
}