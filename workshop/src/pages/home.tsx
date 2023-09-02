import { ChangeEvent, useEffect, useState } from "react"
import { User, randomWords } from "./names"
import styles from "./home.module.scss"

export const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  const [filteredMembers, setFilteredMembers] = useState<string[]>(randomWords)
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const user:User = {
    name,
    password
  }
  const onHandleClick = () => {
    console.log("onHandleClick")
    setCounter(counter + 1)
  }
  const onHandleKeyName = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onHandleKeyUser")
    setName(event.target.value)
  }
  const onHandleKeyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onHandleKeyUser")
    setPassword(event.target.value)
  }
  useEffect(() => {
    console.log("ejecuto useEffect")
    setFilteredMembers(randomWords.filter((x) => x.includes(user.name.toLocaleLowerCase())))
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
            name="password"
            placeholder="password"
            onChange={(e) => onHandleKeyPassword(e)}
            value={user.password}
          />
        </div>
      </div>
      <div className={styles.content}>
        {
          filteredMembers.map((name) => (
            <p key={name}>{name}</p>
          ))
        }
      </div>
    </div>
  )
}
