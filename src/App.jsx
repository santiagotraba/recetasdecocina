import React from "react";
import "./App.css";

import RecetaAleatoria from "./components/ObtenerRecetaAleatoria";

function App() {
  return (
    // <div className="fondo min-h-screen flex items-center justify-center bg-cover bg-center relative">
    //   <div className="flex flex-col justify-center items-center bg-white/70 backdrop-blur-md p-8">
    //     <RecetaAleatoria />
    //   </div>
    // </div>
    // <div className="fondo flex items-center justify-center bg-cover bg-center relative">
    //   <div className="inset-0 bg-white/70 backdrop-blur-md flex items-center justify-center p-8 rounded-lg shadow-lg text-center">
    //     <div className="z-10 p-8 rounded-lg">
    //       <h1 className="text-3xl font-bold mb-6">Receta</h1>
    //       <RecetaAleatoria />
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[80rem] h-full mx-auto ">
      <RecetaAleatoria />
    </div>
  );
}

export default App;
