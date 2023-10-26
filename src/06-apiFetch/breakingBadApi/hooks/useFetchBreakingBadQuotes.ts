import {useEffect, useState} from "react";
import {getBreakingBadQuotes} from "../helpers/getBreakingBadQuotes.ts";
import {BrakingBadModel} from "../models/BrakingBadModel.ts";


export const useFetchBreakingBadQuotes = (counter: number) => {


    const initDataValue: BrakingBadModel[] = null as any;

    const [state, setState] = useState({
        data: initDataValue,
        isLoading: true,
        hasError: null
    });


    const fetchBreakingBadQuotes = async () => {
        let response = null;
        setState({...state, isLoading: true});

        try {
            response = await getBreakingBadQuotes(counter);
        } catch (error: any) {
            setState({data: [], isLoading: false, hasError: error})
        }

        setState({data: response, isLoading: false, hasError: null})

    }


    useEffect(() => {
        fetchBreakingBadQuotes();
    }, [counter]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }


}