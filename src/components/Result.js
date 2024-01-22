import React from 'react'
import { Link } from 'react-router-dom';

import ResultTable from './ResultTable';
import { resetAllActions } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';


import '../styles/Result.css';
import { useDispatch } from 'react-redux';


export default function Result() {

  const dispatch = useDispatch();

  function onRestart (){
    dispatch(resetAllActions());
    dispatch(resetResultAction());
  };
  

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username : </span>
          <span className='bold'>Daily tuition</span>
        </div>
        <div className='flex'>
          <span>Total Questions : </span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total attempts : </span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points : </span>
          <span className='bold'>30</span>
        </div>
        <div className='flex'>
          <span>Quiz Result: </span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable />
      </div>
    </div>
  )
}
