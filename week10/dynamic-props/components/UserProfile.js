// import styles from '../styles/UserProfile.module.css';
import UserCard from './UserCard.js'

function UserProfile(props) {

  return (
    <div>
        <UserCard {...props}
        defaultEmail="default@mail.com"
        />
    </div>
  );
}

export default UserProfile;