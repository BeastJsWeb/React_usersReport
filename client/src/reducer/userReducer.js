export const INITIAL_STATE = {
  loading: false,
  users: [],
  loadedQuery: false,
  queryUsers: [],
  error: null
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'QUERY_USERS_NULL':
      return {
        queryUsers: [],
        loadedQuery: false
      }
    case 'FETCH_START':
      return {
        loading: true,
        error: null,
        loadedQuery: false
      }
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        users: action.payload
      }
    case "QUERY_USERS_SUCCESS":
      return {
        loading: false,
        loadedQuery: true,
        queryUsers: action.payload
      }
    case "FETCH_ERROR":
      return {
        error: action.payload.message
      }
    default:
      return state
  }
}