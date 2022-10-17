import { useReducer } from "react"

import { userReducer, INITIAL_STATE } from "../reducer/userReducer"

export const useFetching = (callback) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  
  const fetching = async () => {
    dispatch({type: 'FETCH_START'})
    try {
      const result = await callback()
      dispatch({type: 'FETCH_SUCCESS', payload: result})
    } catch (e) {
      console.log(e)
      dispatch({type: 'FETCH_ERROR', payload: e})
    }
  }
  
  return [fetching, state]
}