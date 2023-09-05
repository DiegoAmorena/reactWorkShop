import { useState } from "react"
import styles from "./couter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0)
  const onHandleClick = () => {
    console.log("onHandleClick")
    setCounter((prev) => prev+1)
    setCounter((prev) => prev+1)
  }
  return (
    <div className={styles.content}>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={onHandleClick}>Add 2</button>
      </div>
  )
}
