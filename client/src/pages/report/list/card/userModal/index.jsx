import React from "react"

import cl from './style.module.scss'
import { Modal } from "../../../../../components"

export const UserModal = ({user}) => {
  
  return (
    <Modal>
      <div className={cl.modal_content} >
        <div>{user.name}</div>
        <div className={cl.body}>
          <ul>
            <li>Телефон:</li>
            <li>Почта:</li>
            <li>Дата приема:</li>
            <li>Должность:</li>
            <li>Подразделение:</li>
          </ul>
          <ul>
            <li>
              <a 
                href="*"
                onClick={e => e.preventDefault()}
              >
                {user.phone}
              </a>
            </li>
            <li>
              <a 
                href="*"
                onClick={e => e.preventDefault()}
              >
                {user.email}
              </a>
            </li>
            <li>{user.hire_date}</li>
            <li>{user.position_name}</li>
            <li>{user.department}</li>
          </ul>
        </div>
        <ul className={cl.footer}>
          <li>Дополнительная информация:</li>
          <li>
            Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. 
            Так как дополнительной информации в JSON нет, а адрес нигде не используется закинул его сюда:
            {user.address}
          </li>
        </ul>
      </div>
    </Modal>
  )
}