import React, {useContext} from 'react'
import {MiContexto} from './Contenedor'

export default function SubComponente(props) {

    const animal = useContext(MiContexto);

    return (
        <>
            <p className="card-text">
                <strong>Reino:</strong> {animal.reino}  <br />

                <strong>Familia:</strong> {animal.familia} <br />

                <strong>Género:</strong> {animal.genero} <br />

                <strong>Especie:</strong> {animal.especie}
            </p>

        </>
    )
}
