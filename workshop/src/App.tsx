import { Home } from './pages/';
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <Home />
      </header>
    </div>
  );
}

export default App;
