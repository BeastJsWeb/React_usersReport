import React from 'react'
import { useContext } from 'react'

import cl from './style.module.scss'
import {IoIosClose} from '../../../assets/icons/index'
import { modalContext } from '../../../utils/context/modalContext'

export const Modal = ({children}) => {
  const {handleUseModal} = useContext(modalContext)
  
  const handleStop = e => e.stopPropagation()

  return (
    <div 
      className={cl.modal} 
      onClick={handleUseModal}
    >
      <div 
        className={cl.modal_content}
        onClick={handleStop}
      >
        <button onClick={handleUseModal} >
          <IoIosClose />
        </button>
        {children}
      </div>
    </div>
  )
}