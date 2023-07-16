import { useState } from 'react';
import './Child.css';

function Child() {
    const [counter, setCounter] = useState(0);
    console.log('child rendered e');
    return (
        <div style={{ color: 'red' }} onClick={() => setCounter((a) => a + 1)}>
          child {counter}
        </div>
    );
}
export default Child;

