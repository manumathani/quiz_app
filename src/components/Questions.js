import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
//Import custom hook
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { updateResult } from '../hooks/setResult';

export default function Questions({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const state = useSelector(state => state);
  const trace = useSelector(state => state.question.trace);
  const result = useSelector(state => state.result.result);
  const question = useSelector(state => state.question.queue[trace]);

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log({trace, checked});
    dispatch(updateResult({trace, checked}));   
  }, [checked]);

  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({trace, checked})); 
  };


  return (
      <div className='questions'>
      <h2 className='text-light'>{ question?.question}</h2>

          <ul key={question?.id}>
              {question?.options.map((q, i) => (                  
                <li key={i}>
                    <input
                        type='radio'
                        value={false}
                        name='options'
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                      />

                    <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                    <div className={`check ${result[trace] == i ? "checked" : '' }`}></div> 
                      
                </li>                              
              ))}                          
          </ul>
    </div> 
  )
}
