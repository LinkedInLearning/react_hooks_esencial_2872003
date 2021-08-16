import React from 'react'
import MiComponente from "./MiComponente";

export default function Contenedor() {
    const data = {
        nombreComun: 'Sardina común',
        reino: 'Animal',
        familia: 'Clupeidae',
        genero: 'Sardina',
        especie: 'Sardina pilchardus'
    }

    const data2 = {
        nombreComun: 'Salmón',
        reino: 'Animal',
        familia: 'Salmonidae',
        genero: 'Salmo',
        especie: 'Salmo balcanicus'
    }
    
    return (
        <div className="container">
            <MiContexto.Provider value={data2}>
                <MiComponente/>
            </MiContexto.Provider>

        </div>
    )
}

export const MiContexto = React.createContext(null)
