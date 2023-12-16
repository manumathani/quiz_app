import React, { useEffect, useState } from 'react'
import data from '../database/data'

export default function Questions() {
    const [checked, setChecked] = useState(undefined);

    const question = data[0];

    
    useEffect(() => {
        console.log(question)
    })

    function onSelect(i) {
        console.log('radio button changed')
        console.log(i)
    }

  return (
      <div className='questions'>
          <h2 className='text-light'>Simplie Question 1</h2>

          <ul key={question.id}>
              {question.options.map((q, i) => (                  
                <li key={i}>
                    <input
                        type='radio'
                        value={false}
                        name='options'
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                      />

                    <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                    <div className='check checked'></div> 
                      
                </li>                              
              ))}                          
          </ul>
    </div> 
  )
}
