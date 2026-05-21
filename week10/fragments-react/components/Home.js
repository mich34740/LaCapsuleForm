import styles from '../styles/Home.module.css';
import Greeting from './Greeting.js'
import ProductList from './Products.js'
import Table from './Table.js'

const items=[{id: 45, name: "produit 1", desc: "description produit 1"},
    {id: 46, name: "produit 2", desc: "description produit 2"},
    {id: 47, name: "produit 3", desc: "description produit 3"},
    {id: 48, name: "produit 4", desc: "description produit 4"}]

function Home() {
  return (
    <div>
      <main className={styles.main}>
         < Greeting />
         < ProductList items={items} />
         < Table />
      </main>
    </div>
  );
}

export default Home;