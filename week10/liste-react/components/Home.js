import styles from '../styles/Home.module.css';
import ColorList from './ColorList.js'
import UserList from './UserList.js'

function Home() {
  return (
    <div>
      <main className={styles.main}>
        < ColorList />
        <UserList />
      </main>
    </div>
  );
}

export default Home;
