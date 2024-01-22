import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import data from '../database/data';

import * as Action from '../redux/question_reducer';


/****fetch question hook to fetch api data and set value to state */
export const useFetchQuestion = () => {
    //1. Initialize dispatch
    const dispatch = useDispatch();
    //2. Set state
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        (async () => {
            try {
                let question = data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false, apiData: question }));

                    /**dispatch an action */
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false, serverError: error }))
            
            }
        })();
    }, [dispatch]);
    
    return [getData, setGetData]
};

export const moveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
        
    } catch (error) {
        console.log(error);
    }
};

export const movePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
        
    } catch (error) {
        console.log(error);
    }
};