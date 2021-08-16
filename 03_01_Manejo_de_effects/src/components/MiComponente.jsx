import React , { useEffect} from 'react'

export default function MiComponente() {

  useEffect( ()=>{
    console.log("effects");
  })

  const metodo = ()=>{

  }
  return (
    <div>
      <h1 onClick={metodo}> Effects </h1>
    </div>
  )
}
