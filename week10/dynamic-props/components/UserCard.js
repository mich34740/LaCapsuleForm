function UserCard({ firstName, lastName, email, defaultEmail, age }) {

  return (
        <div>
            <h2>
                {firstName} {lastName}
            </h2>

            <p>Email : {email || defaultEmail}</p>
            {age && <p>Âge : {age}</p>}
        </div>   
        );
}

export default UserCard;