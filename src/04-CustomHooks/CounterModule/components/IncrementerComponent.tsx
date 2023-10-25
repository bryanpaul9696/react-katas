import {useCounterHook} from "../Hooks/useCounterHook.ts";

export const IncrementerComponent = () => {
    const {counter, increment, decrement, reset} = useCounterHook(10);


    return (
        <div>


            <h1>El valor actual es: {counter} </h1>

            <div>
                <button onClick={increment}>
                    increment
                </button>
            </div>

            <br/>
            <div>

                <button onClick={decrement}>
                    decrement
                </button>

            </div>

            <br/>
            <div>
                <button onClick={reset}>
                    reset
                </button>

            </div>

        </div>
    )   ;
}