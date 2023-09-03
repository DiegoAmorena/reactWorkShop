import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Person, filterPeople, randomPeople } from "../common/names/names";

export const useLoginForm = () => {
  const [name, setName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const user: Person = useMemo(() => {
    return {
      name: name,
      lastName: lastName
    }
  }, [name, lastName])
  const [filteredMembers, setFilteredMembers] = useState<Person[]>(randomPeople)
  const onHandleKeyName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onHandleKeyLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }
  useEffect(() => {
    const controller = new AbortController()
    setTimeout(() =>
      setFilteredMembers(filterPeople({ p: user }))
      , 1500)
    return () => {
      controller.abort()
    }
  }, [user])
  return {
    user,
    filteredMembers,
    onHandleKeyLastName,
    onHandleKeyName
  }
}
//const fetchData = async () => {
//  const response = await fetch("", { signal:controller.signal })
//}