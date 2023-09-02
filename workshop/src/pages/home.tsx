import { ChangeEvent, useEffect, useState } from "react"
import { User, randomPeople } from "./names"
import styles from "./home.module.scss"

export const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  const [filteredMembers, setFilteredMembers] = useState<User[]>(randomPeople)
  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const user: User = {
    name: name,
    surname: surname
  }
  const onHandleClick = () => {
    console.log("onHandleClick")
    setCounter(counter + 1)
  }
  const onHandleKeyName = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onHandleKeyUser")
    setName(event.target.value)
  }
  const onHandleKeySurname = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onHandleKeyUser")
    setSurname(event.target.value)
  }
  useEffect(() => {
    console.log("ejecuto useEffect")
    setTimeout(() =>
      setFilteredMembers(randomPeople.filter((x) =>
        x.name.includes(user.name.toLocaleLowerCase()) &&
        x.surname.includes(user.surname.toLocaleLowerCase())
      ))
      , 500)
  }, [user])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={onHandleClick}>Add 1</button>
      </div>
      <div className={styles.content}>
        <h3>Login</h3>
        <div className={styles.column}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => onHandleKeyName(e)}
            value={user.name}
          />
          <input
            type="text"
            name="surname"
            placeholder="surname"
            onChange={(e) => onHandleKeySurname(e)}
            value={user.surname}
          />
        </div>
      </div>
      <div className={styles.content}>
        {
          filteredMembers.map((user) => (
            <p key={user.name + user.surname}>{user.name + " " + user.surname}</p>
          ))
        }
      </div>
    </div>
  )
}
