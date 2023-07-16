import { useState } from "react"

function Counter() {
    const [ctr,setCtr]=useState(0);
  return (
    <>
    <div>Counter - {ctr} </div>
    <button type="button" onClick={()=>setCtr(a=>a+1)}>Increases</button>
    </>
  )
}

export default Counter