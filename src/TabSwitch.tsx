import { useState } from "react"

function TabSwitch() {
const [tab,setTab]=useState("left");

  return (
    <div>
      <button onClick={()=>setTab("left")}>Left</button>
      <button onClick={()=>setTab("right")}>right</button>
      {tab=="left"?<div id="left">Left tab</div>:<div id="right">Right tab</div>}
    </div>
  )
}

export default TabSwitch