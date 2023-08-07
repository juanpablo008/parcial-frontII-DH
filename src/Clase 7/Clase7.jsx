import { useState } from "react"

const Clase7 = () => {


    const aumentarContador = () => {
        setCount(count+1);
        console.log(count);
    }

    const [count, setCount] = useState(0);

  return (
    <>
        <div>{count}</div>
        <button onClick={aumentarContador}>Incrementar</button>
    </>
  )
}

export default Clase7