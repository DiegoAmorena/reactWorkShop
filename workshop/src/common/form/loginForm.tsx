import { useLoginForm } from "../../hooks/use-login-form"
import styles from "./loginForm.module.scss"

export const LoginForm = () => {
  const {
    user,
    filteredMembers,
    onHandleKeyLastName,
    onHandleKeyName
  } = useLoginForm()
  return (
    <>
      <div className={styles.content}>
        <h3>Login</h3>
        <div className={styles.column}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={onHandleKeyName}
            value={user.name}
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={user.lastName}
            onChange={onHandleKeyLastName}
          />
        </div>
      </div>
      <div className={styles.content}>
        {
          filteredMembers.map((user) => (
            <p key={user.name + user.lastName}>{user.name + " " + user.lastName}</p>
          ))
        }
      </div>
    </>
  )
}