import cl from './style.module.scss'
import {BiError} from '../../../assets/icons/index'

export const Error = ({children}) => {
  return (
    <div className={cl.error} >
      <BiError />
      {children}
    </div>
  )
}