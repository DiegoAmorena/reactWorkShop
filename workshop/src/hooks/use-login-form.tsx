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
    console.log("onHandleKeyUser executed")
    setName(event.target.value)
  }
  const onHandleKeySurname = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onHandleKeyUser executed")
    setSurname(event.target.value)
  }
  useEffect(() => {
    console.log("useEffect executed")
    setTimeout(() =>
      setFilteredMembers(randomPeople.filter((x) =>
        x.name.toLocaleLowerCase().includes(user.name.toLocaleLowerCase()) &&
        x.surname.toLocaleLowerCase().includes(user.surname.toLocaleLowerCase())
      ))
      , 5000)
  }, [user])
  return {
    user,
    filteredMembers,
    onHandleKeySurname,
    onHandleKeyName
  }
}