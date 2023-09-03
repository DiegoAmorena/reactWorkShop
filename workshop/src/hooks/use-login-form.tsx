import { ChangeEvent, useEffect, useState } from "react";
import { User, randomPeople } from "../common/names/names";

export const useLoginForm = () => {
  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const user: User = {
    name: name,
    surname: surname
  }
  const [filteredMembers, setFilteredMembers] = useState<User[]>(randomPeople)
  const onHandleKeyName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onHandleKeySurname = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value)
  }
  useEffect(() => {
    setTimeout(() =>
      setFilteredMembers(randomPeople.filter((x) =>
        x.name.toLocaleLowerCase().includes(user.name.toLocaleLowerCase()) &&
        x.surname.toLocaleLowerCase().includes(user.surname.toLocaleLowerCase())
      ))
      , 1500)
  }, [user])
  return {
    user,
    filteredMembers,
    onHandleKeySurname,
    onHandleKeyName
  }
}