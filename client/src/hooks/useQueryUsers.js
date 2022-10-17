import { useMemo, useReducer} from "react"

import { userReducer, INITIAL_STATE } from "../reducer/userReducer"
import userService from "../API"

export const useQueryUsers = (initialValue) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
 
  const handleSubmitQuery = useMemo(() => {
    if (!initialValue) {
      return dispatch({type: 'QUERY_USERS_NULL'})
    }
    return async () => {
      dispatch({type: 'FETCH_START'})
      try {
        const user = await userService.getUser(initialValue)
        dispatch({type: "QUERY_USERS_SUCCESS", payload: user})
      } catch (e) {
        console.log(e)
        dispatch({type: 'FETCH_ERROR', payload: e})
      } 
    }
  }, [initialValue])

  return [state, handleSubmitQuery]
}