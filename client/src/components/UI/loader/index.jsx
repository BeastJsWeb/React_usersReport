import {AiOutlineLoading3Quarters} from '../../../assets/icons/index'
import cl from './index.module.scss'
 
export const Loader = () => {
  return (
    <div className={cl.loader}>
      <AiOutlineLoading3Quarters size='4em' />
    </div>
  )
}