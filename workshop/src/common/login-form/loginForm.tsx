import { useLoginForm } from "../../hooks/use-login-form"
import styles from "./loginForm.module.scss"

export const LoginForm = () => {
  const {
    user,
    filteredMembers,
    onHandleKeySurname,
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
            name="surname"
            placeholder="surname"
            value={user.surname}
            onChange={onHandleKeySurname}
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
    </>
  )
}