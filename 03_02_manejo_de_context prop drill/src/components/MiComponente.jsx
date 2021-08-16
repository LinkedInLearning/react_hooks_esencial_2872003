import React , {useContext} from 'react'
import {MiContexto} from './Contenedor'
import SubComponente from "./SubComponente";

export default function MiComponente() {

    const animal = useContext(MiContexto);

  return (

    <div className="col-12 col-md-4 mt-5">
        <div className="card border rounded overflow-hidden card_icon p-2">
            <h3 className="card-title border-bottom"> {animal.nombreComun} </h3>
            <SubComponente />
        </div>
    </div>


  )
}




