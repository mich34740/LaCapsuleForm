import styles from '../styles/Home.module.css';
import Greeting from './Greeting.js'
import UserProfile from './UserProfile.js'
import Button from './Button.js'
import Card from './Card.js'


const user={firstName: "Paul", lastName: "Bismuth"};
const userLog={username: "PBis",  email: "PB@ex.com", age: 22};

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Greeting {...user}/>
          <UserProfile {...userLog}/>
          <Button
            label="Click me!"
            onClick={() => alert('Button clicked')}
            className="btn"
            disabled={false}
          />
          <Card title="Special Title" content="This is important" styleProps={{ backgroundColor: 'lightblue', padding: '20px' }} />
        </h1>
      </main>
    </div>
  );
}

export default Home;
