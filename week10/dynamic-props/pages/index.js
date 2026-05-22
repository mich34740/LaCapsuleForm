import UserProfile from '../components/UserProfile';

const user={firstName: "Paul", lastName: "Bismuth", email: "", age: 12}

function Index() {
  return <UserProfile {...user} />;
}

export default Index;
