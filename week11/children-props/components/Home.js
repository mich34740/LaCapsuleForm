import styles from '../styles/Home.module.css';
import Container from './Container.js'
import Layout from './Layout.js'
import TabContainer from './TabContainer.js'

function Home() {
  const content= (<p>Ceci est un texte à lintérieur dun conteneur.</p>);

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
             <Container>{content}</Container> 
        </h1>
        <Layout isSidebarVisible={false}>
          <div slot="sidebar">Ceci est le sidebar</div>
          <div slot="content">Ceci est le contenu principal</div>
        </Layout>
        <TabContainer>
          <div title="Onglet 1">Contenu de l'Onglet 1</div>
          <div title="Onglet 2">Contenu de l'Onglet 2</div>
          <div title="Onglet 3">Contenu de l'Onglet 3</div>
        </TabContainer>
      </main>
    </div>
  );
}

export default Home;
