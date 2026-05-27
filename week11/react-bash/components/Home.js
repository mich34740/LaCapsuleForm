import styles from '../styles/Home.module.css';
import Counter from './Counter.js'

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Counter/>
        </h1>
      </main>
    </div>
  );
}

export default Home;
