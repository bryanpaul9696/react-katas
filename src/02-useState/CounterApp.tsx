import {useState} from "react";

export const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Incrementa el Contador</h1>
            <div>
                <h3> El valor actual del contador es :
                    {
                        counter
                    }
                </h3>
            </div>
            <button onClick={
                () => {
                    setCounter(counter + 1)
                }
            }>
                +1
            </button>
        </>
    )     ;
}
