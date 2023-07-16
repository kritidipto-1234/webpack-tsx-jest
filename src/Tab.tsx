
import { useState } from "react";
import TabChild from "./TabChild";

function Tab()
{
    const [counter,setCounter] = useState(0);
    return <><div onClick={()=>setCounter(a=>a+1)}>taffewferfb f s  tab {counter}  </div><TabChild/></>;
}

export default Tab;