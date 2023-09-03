import { useState } from "react"
import styles from "./counter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)
  const onHandleClick = () => {
    setCounter(counter + 1)
  }
  return (
    <div className={styles.content}>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={onHandleClick}>Add 1</button>
      </div>
  )
}
