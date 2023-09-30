import { useState } from 'react';
import styles from './App.module.scss';
import Parent from './Parent';
import Greeting from './Greeting';
import './Child.css';
import TabSwitch from './TabSwitch';
// import addTwoNumbers from './addTwoNumbers';

function App() {
    const [counter, setCounter] = useState(0);
    // console.log(addTwoNumbers)
    return (
        <>
            main app
            <Greeting/>
            <input></input>
            <h1 onClick={() => setCounter((a) => a + 1)}>App changed{counter} {counter}</h1>;
            <Parent />
            <TabSwitch/>
        </>
    );
}

export default App;

// module.hot.accept(['./a.js'],function(){
//     console.log("Reacting to add two number update")
// })
const script = document.createElement('script')
script.id = "a"
script.src = '/deep/a.js';
document.head.appendChild(script);
console.log("script added", script)