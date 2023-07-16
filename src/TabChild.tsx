import { useState } from "react";

function TabChild() {
  const [counter,setCounter] = useState(0);
  return (
    <div onClick={()=>setCounter(a=>a+1)}>TabChinw nnn {counter}.</div>
  )
}

export default TabChild