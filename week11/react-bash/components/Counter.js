import styles from '../styles/Counter.module.css';
import React, { useState } from "react";

function Counter() {
    
    const [count, setCount] = useState(0);
    const [initValue , setInitValue] =  useState('');

    const handleIncrement = (increment=true) => {
    if (increment){    
        if (count<10) {    
            setCount(prevCount => prevCount + 1);
        }} else {
            if (count>0) {    
            setCount(prevCount => prevCount - 1);
            }
        }    
    };
    const handleChange = (e) => {
        setInitValue(e.target.value);
    }
    const handleSetCounter = () => {
    setCount(Number(initValue));
    };
    return (
        <div>
            {/* Titres des onglets */}
            <div className="counter">
                <input type="number" placeholder="Valeur initiale" value={initValue} onChange={handleChange}/>
                <button onClick={handleSetCounter}>Définir le compteur</button>
                <h2>Compteur : {count}</h2>
                <button onClick={() => handleIncrement()}>Incrémenter</button>
                <button onClick={() => handleIncrement(false)}>décrémenter </button>
            </div>
        </div>
    );
}

export default Counter;