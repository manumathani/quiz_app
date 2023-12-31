import React, { useEffect } from 'react';
/**redux store import */
import { useSelector, useDispatch } from "react-redux";

import Questions from './Questions';
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestions';
import { pushResult } from '../hooks/setResult';

export default function Quiz() {
  const dispatch = useDispatch();

  const { queue, trace } = useSelector(state => state.question)
  
  useEffect(() => {
    //console.log(queue)
    //console.log(trace)
  })
  /**Next button event handler */
  function onPrev() {
    console.log("Previous Question")
    if (trace > 0) {
      //moveNextQuestion action dispatch
      dispatch(movePrevQuestion());      
    };   
  };
  /**Next button event handler */
  function onNext() {
    console.log("Next Question")

    if (trace < queue.length - 1 ) {
      /**Dispatch move next action */
      dispatch(moveNextQuestion());
      dispatch(pushResult(1))
    };


   
      

  };

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      

      {/**display questions*/}
      <Questions/>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

      

    </div>
  )
}
