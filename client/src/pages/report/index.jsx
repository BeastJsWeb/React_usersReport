import React, {useEffect} from "react"

import cl from './style.module.scss'
import { Search, Loader, Error } from "../../components"
import { List } from "./list"
import { useFetching } from "../../hooks/useFetching"
import { useQueryUsers } from "../../hooks/useQueryUsers"
import { useInput } from "../../hooks/useInput"
import userService from "../../API"

export const Report = () => {
  const [fetchUsers, state] = useFetching( async () => await userService.getAll())

  useEffect(() => { fetchUsers() }, [])

  const searchInput = useInput('')

  const [queryState, handleSubmitQuery] = useQueryUsers(searchInput.value)

  const currnetUsers = queryState.loadedQuery ? queryState.queryUsers : state.users

  return (
    <section className={cl.report}>
      {(state.loading || queryState.loading) &&
        <Loader />
      }
      <Search
        {...searchInput}
        OnSubmit={!queryState.loading ? handleSubmitQuery : null}
      />
      { state.users?.length
        ? <List currnetUsers={currnetUsers} />
        : ''
      }
      { (state.error || queryState.error) &&
        <>
          <Error>{state.error || queryState.error}</Error>
          <p>Users not foud</p>
        </>
      }
    </section>
  )
}