function UserProfile({username, email, age}) {
    // const {firstName, lastName} = props;

    return (
        <div>
            <p> username: {username}</p>
            <p> email: {email}</p>
            <p> age: {age>18 ? age : null} </p>
       </div>
   );
}

export default UserProfile;