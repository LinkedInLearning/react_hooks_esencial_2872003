import React from 'react'
import MiComponente from "./MiComponente";

export default function Contenedor() {
    return (
        <div>
            <MiContexto.Provider value={500}>
                <MiComponente />
            </MiContexto.Provider>
            
        </div>
    )
}

export const MiContexto = React.createContext(null)
