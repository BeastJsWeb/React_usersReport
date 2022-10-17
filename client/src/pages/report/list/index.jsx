import React from "react"

import cl from './style.module.scss'
import { Card } from "./card"

export const List = ({currnetUsers}) => {

  return (
    <div className={cl.list} >
      { !currnetUsers?.length &&
        <p>Users not found</p>
      }
      {currnetUsers?.map(user =>
        <Card 
          user={user} 
          key={user.phone}
        />
      )}
    </div>
  )
}