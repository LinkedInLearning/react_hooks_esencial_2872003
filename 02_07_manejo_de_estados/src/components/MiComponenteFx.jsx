import React, { useState } from "react";
import Opcion from "./Opcion";

export default function MiComponenteFx() {
  
  const [nombre, setNombre] = useState("1");

  const [direccion, setDireccion] = useState({
    pais: "USA",
    estado: "Arizona",
    ciudad: "Springfileld",
  });

  const [opciones, setOpciones] = useState([
    {
      name: "Opción 1",
      value: 1,
    },
    {
      name: "Opción 2",
      value: 2,
    },
    {
      name: "Opción 3",
      value: 3,
    },
  ]);

  const cambio = () => {

    setNombre('2');

    setDireccion({ ...direccion , estado:'Ohio'  })

    const nuevoItem = {
      name: "Nueva Opción",
      value: 3,
    }

    const actualizado = opciones.map( (item) => item.value === 1 ? nuevoItem: item );
    setOpciones( actualizado)


  };

  const listaOpciones = opciones.map(({ name, value }) => (
    <div key={name.replace(" ", "").toLowerCase()} className="col-md-4">
      <Opcion name={name} clickHandler={cambio} />
    </div>
  ));

  return (
    <div className="container row">
       {listaOpciones}
    </div>
  );
}
