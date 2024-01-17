import React, { useEffect, useState } from 'react';
/**redux store import */
import { useSelector, useDispatch } from "react-redux";

import Questions from './Questions';
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestions';
import { pushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  
  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector(state => state.question)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result)
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

    if (trace < queue.length) {
      /**Dispatch move next action */
      dispatch(pushAnswer(check))
      dispatch(moveNextQuestion());
      
    };
  };

  function onChecked(check){
    console.log(check)
    setChecked(check)
  }

  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      

      {/**display questions*/}
      <Questions onChecked={onChecked}/>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

      

    </div>
  )
}
