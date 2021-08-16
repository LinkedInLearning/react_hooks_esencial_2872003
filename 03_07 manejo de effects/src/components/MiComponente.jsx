import React, { useEffect, useState } from "react";

export default function MiComponente() {

  const [lista, setLista] = useState([
    { nombre: "leche", status: 0, precio: 4 },
    { nombre: "fruta", status: 0, precio: 5 },
    { nombre: "vinagre", status: 0, precio: 3 },
    { nombre: "café", status: 0, precio: 10 },
  ]);

  useEffect( ()=>{
    actualizarCarritoDeCompra();
  }, [lista])



  const [seleccionados, setseleccionados] = useState([]);



  const agregarALista = (e) => {

    const nuevaLista = lista.map((producto) =>
      producto.nombre === e.target.value ? { ...producto, status: (e.target.checked)?1:0 } : producto
    );

    setLista(nuevaLista);
  
    
  };

  const actualizarCarritoDeCompra = () => {

    const nuevoCarrito = lista
      .filter((producto) => producto.status === 1)
      .map((producto) => producto.nombre);

      setseleccionados(nuevoCarrito)

  };

  const listaOpciones = lista.map(({ nombre, precio }) => (
    <li key={nombre.replace(" ", "").toLowerCase()} onChange={agregarALista} className="list-group-item" >
      <input type="checkbox" value={nombre} /> ${precio} {nombre}
    </li>
  ));

  return (
    <div className="container">
  
      <ul className="list-group" >{listaOpciones}</ul>

      <div className="alert alert-warning" role="alert">
        🛒 {seleccionados.map((tag, i) => [i > 0 && ", ", <> {tag} </>])}
      </div>

      <div></div>
    </div>
  );
}
