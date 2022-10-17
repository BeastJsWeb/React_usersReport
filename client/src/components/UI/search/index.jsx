import React from 'react'
import {DebounceInput} from 'react-debounce-input'

import {MdSearch} from '../../../assets/icons/index'
import cl from './style.module.scss'

export const Search = ({OnSubmit, loading, ...props}) => {

  const handleSubmit = e => {
    e.preventDefault()
    if (!loading) {
      OnSubmit && OnSubmit()
    }
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
        <MdSearch size={35} />
      </button>
    </form>
  )
}