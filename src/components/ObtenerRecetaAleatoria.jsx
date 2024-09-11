import React, { useState } from "react";
import { recetaAleatoria } from "../../recetas/mapeo";
import { UserGroupIcon, TimerIcon } from "./icons";

const RecetaAleatoria = () => {
  const [receta, setReceta] = useState(null);

  const click = () => {
    const nuevaReceta = recetaAleatoria();
    setReceta(nuevaReceta);
  };

  return (
    <article className="fondo flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      <div className="overlay"></div>
      <button
        className="boton button px-4 py-2 bg-black rounded-lg text-white z-10 mb-4"
        onClick={click}
      >
        Obtener receta aleatoria
      </button>
      <div className="text w-full flex flex-col">
        {receta && (
          <div className="flex flex-col w-full p-4">
            <h2 className="text-lg font-bold mb-2">{receta.nombre}</h2>
            <div className="information flex flex-wrap gap-2 items-center mb-2">
              <div className="flex flex-row gap-1 items-center">
                <UserGroupIcon className="w-6 h-6" />
                <span className="text-sm">{receta.porciones} porciones</span>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <TimerIcon className="w-6 h-6" />
                <span className="text-sm">{receta.tiempo}</span>
              </div>
            </div>
            <div className="flex flex-col items-start mb-2">
              <h3 className="fontsize font-bold mb-1">Ingredientes:</h3>
              <ul className="fontsize list-disc ml-4">
                {receta.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start mb-2">
              <h3 className="fontsize font-bold mb-1">Preparación:</h3>
              <ol className="fontsize list-decimal ml-4">
                {receta.preparacion.map((paso, index) => (
                  <li key={index}>{paso.trim()}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default RecetaAleatoria;
