import { Counter } from "../common/counter/counter"
import { LoginForm } from "../common/login-form/loginForm"
import styles from "./home.module.scss"

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Counter />
      <LoginForm />
    </div>
  )
}