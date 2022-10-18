import React from 'react'
import {DebounceInput} from 'react-debounce-input'

import {MdSearch} from '../../../assets/icons/index'
import cl from './style.module.scss'

export const Search = ({onSubmit, ...props}) => {

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit()
  }
 
  return (
    <form 
      autoComplete="off"
      className={cl.search} 
      onSubmit={handleSubmit}
    >
      <DebounceInput 
        {...props} 
        type='text'
        minLength={2}
        debounceTimeout={500}
      />
      <button type='submit' >
        <MdSearch />
      </button>
    </form>
  )
}