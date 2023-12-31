import {useFetchBreakingBadQuotes} from "./hooks/useFetchBreakingBadQuotes.ts";
import {useState} from "react";

export const BreakingBadQuotes = () => {
    const [quoteNumber, setQuoteNumber] = useState(0);
    const {data, isLoading} = useFetchBreakingBadQuotes(quoteNumber)
    const {author, quote} = !!data && data[0];

    const increment = () => {
        setQuoteNumber(quoteNumber + 1)
    }

    return (

        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading
                    ? <h1>Cargando información</h1>
                    : <div>
                        <h1>{author}</h1>
                        <h1>{quote}</h1>
                    </div>

            }

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={increment}>
                Next quote
            </button>

        </>
    );
}