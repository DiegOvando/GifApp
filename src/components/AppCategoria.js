import React, { useState } from 'react'

export default function AppCategoria({ setCategorias }) {

  const [inputValue, setInputValue] = useState('');

  const eInputChange = (e) => {
     setInputValue(e.target.value);
  }

  const submit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length > 2)
      {
        setCategorias ( cats => [inputValue, ...cats]);
        setInputValue('');
      }
    }

  return (
      <form onSubmit={ submit }>
          <input type="text" value={inputValue} onChange= {eInputChange}/>
      </form>
  )
}
