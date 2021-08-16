import React , {useState} from 'react'

export default function MiComponenteFx() {

    const [ seleccion , setSeleccion ]  = useState('');

    const onChangeHandler = (evento) => {
       setSeleccion(evento.target.value)
    }

    return (
        <div className="container row">
          <div className="form-check">
            <h1>Selecciona una opción</h1>
  
            <div onChange={onChangeHandler} >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="seleccion"
                  value="1"
                />
                <label className="form-check-label"> Opción 1</label>
              </div>
  
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="seleccion"
                  value="2"
                />
                <label className="form-check-label"> Opción 2</label>
              </div>
  
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="seleccion"
                  value="3"
                />
                <label className="form-check-label"> Opción 3</label>
              </div>
            </div>
          </div>

        
          <hr />
            {seleccion && (
              <h2> Seleccionaste: {seleccion}</h2>
            )}
  
            
        </div> 
      );
}
