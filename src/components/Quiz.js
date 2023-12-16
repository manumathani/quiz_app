import React from 'react'
import Questions from './Questions'

export default function Quiz() {
  /**Next button event handler */
  function onPrev() {
    console.log("Previous Question")
  }
  /**Next button event handler */
  function onNext() {
    console.log("Next Question")
  }

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
