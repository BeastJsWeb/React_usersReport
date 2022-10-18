import React, {useState} from 'react'

import cl from './style.module.scss'
import {MdOutlineEmail, GiSmartphone} from '../../../../assets/icons/index'
import { UserModal } from './userModal'
import { modalContext } from '../../../../utils/context/modalContext'

export const Card = ({user}) => {
  const [isClosed, setIsClosed] = useState(true)

  const handleUseModal = () => setIsClosed(!isClosed)

  const handleStopChanging = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <modalContext.Provider value={{handleUseModal}} >
      <div 
        onClick={handleUseModal}
        className={cl.card} 
      >
        <div>{user.name}</div>
        <ul className={cl.card_body}>
          <li>
            <GiSmartphone />
            {user.phone}
          </li>
          <li>
            <MdOutlineEmail />
            <a 
              href="*"
              onClick={handleStopChanging}
            >
              {user.email}
            </a>
          </li>
        </ul>
        { !isClosed &&
          <UserModal user={user} />
        }
      </div>
    </modalContext.Provider>
  )
}