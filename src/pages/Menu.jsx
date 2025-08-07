import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // Asegúrate de tener este componente

const menuData = {
    Entradas: [
        { nombre: "Mix de chorizo y morcilla", imagen: "mix-de-chorizo-y-morcilla.png" },
        { nombre: "Provoleta Argentina", imagen: "provoleta-argentina.png" },
        { nombre: "Torta de Plátano", imagen: "torta-de-platano.png" },
        { nombre: "Dátiles rellenos de paté envueltos en tocineta", imagen: "datiles-rellenos-de-pate-envueltos-en-tocineta.png" },
    ],
    Carnes: [
        { nombre: "Pork Belly", imagen: "pork-belly.png" },
        { nombre: "Choripán Argentino", imagen: "choripan-argentino.png" },
        { nombre: "Pork Chops", imagen: "pork-chops.png" },
        { nombre: "Solomo USD Choice", imagen: "solomo-usd-choice.png" },
        { nombre: "Churrasco de pollo", imagen: "churrasco-de-pollo.png" },
        { nombre: "Punta USD Prime", imagen: "punta-usd-prime.png" },
        { nombre: "Costillas de cerdo BBQ", imagen: "costillas-de-cerdo-bbq.png" },
        { nombre: "Asado de tira USD Choice", imagen: "asado-de-tira-usd-choice.png" },
    ],
    Ensaladas: [
        { nombre: "Ensalada Koyak", imagen: "ensalada-koyak.png" },
        { nombre: "Ensalada A Su Manera", imagen: "ensalada-a-su-manera.png" },
        { nombre: "Ensalada César", imagen: "ensalada-cesar.png" },
    ],
    Acompañantes: [
        { nombre: "Jojotos con mantequilla", imagen: "jojotos-con-mantequilla.png" },
        { nombre: "Yuca con mojo", imagen: "yuca-con-mojo.png" },
        { nombre: "Corn Bread", imagen: "corn-bread.png" },
        { nombre: "Mac & Cheese", imagen: "mac-&-cheese.png" },
    ],
    Salsas: [
        {
            nombre: "Chimichurri argentino y Guasacaca venezolana",
            imagen: "chimichurri-argentino-y-guasacaca-venezolana.png",
        },
    ],
};

export default function Menu() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    return (
        <div className="bg-[#f5f1e7] text-[#5b1212] min-h-screen">
            {/* Botón volver al home */}
            <div className="flex justify-start items-center p-6">
                <Link
                    to="/"
                    className="flex items-center gap-3 bg-[#5b1212] text-white py-2 px-5 rounded-full text-lg hover:bg-[#732020] transition"
                >
                    <img src="/aSuManera-Icon.png" alt="Inicio" className="w-6 h-6" />
                    Inicio
                </Link>
            </div>

            <section id="menu" className="px-6 pb-12">
                <div className="max-w-6xl mx-auto">
                    {Object.entries(menuData).map(([categoria, items]) => (
                        <div key={categoria} className="mb-12">
                            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#5b1212] pb-2">{categoria}</h2>
                            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {items.map(({ nombre, imagen }) => (
                                    <div
                                        key={nombre}
                                        className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:scale-105 transition"
                                        onClick={() => setImagenSeleccionada(`/images/${imagen}`)}
                                    >
                                        <img
                                            src={`/images/${imagen}`}
                                            alt={nombre}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-medium">{nombre}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal de imagen ampliada */}
            {imagenSeleccionada && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center"
                    onClick={() => setImagenSeleccionada(null)}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl font-bold hover:text-red-500 transition"
                            onClick={() => setImagenSeleccionada(null)}
                            aria-label="Cerrar"
                        >
                            &times;
                        </button>
                        <img
                            src={imagenSeleccionada}
                            alt="Imagen ampliada"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
}