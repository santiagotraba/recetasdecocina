import { recetas } from "./recetas";

const recetaAleatoria = () => {
  const indiceAleatorio = Math.floor(Math.random() * recetas.length);
  return {
    ...recetas[indiceAleatorio],
    ingredientes: recetas[indiceAleatorio].ingredientes.split(".").filter(Boolean),
    preparacion: recetas[indiceAleatorio].preparacion.split(".").filter(Boolean),
  };
};

export { recetaAleatoria };
