import {useState} from "react";


export const useCounterHook = (value:number) => {

    const [counter, setCounter] = useState(value);


    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}