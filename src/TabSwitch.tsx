import { useState } from "react"

function TabSwitch() {
const [tab,setTab]=useState("left");

  return (
    <div>
      <button onClick={()=>setTab("left")}>Left</button>
      <button onClick={()=>setTab("right")}>right</button>
      <div id="leftWrapper" key={Math.random()}>
        {tab=="left" && <div id="left">Left tab</div>}
      </div>
      <div id="rightWrapper">
        {tab=="right" &&<div id="right">right tab</div>}
      </div>
    </div>
  )
}

export default TabSwitch