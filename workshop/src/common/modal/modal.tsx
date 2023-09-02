import { ReactElement } from "react";
import styles from "./modal.module.scss"

export default function Modal({children, isOpen}:
  {isOpen:boolean,
    children:ReactElement}) {
  return (
    <div className={styles.modal} style={{display:isOpen?"":"none"}}>
      {children}
    </div>
  )
}
