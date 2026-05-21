

function UserList() {
const users=[{id: 123, name: "Paul bismuth"}, {id: 124, name: "Peau rouge"}, {id: 125, name: "Pi vert"}, {id: 126, name: "Gandalf le gris"}];
const handleClick = (user) => {alert(user.name);
  };
 
return (
   <ul>
     {users.map ((user, id) => (
       <li key={user.id} onClick={() => handleClick(user)}>
         { user.id % 2 ===0 ?  <strong>{user.name}</strong> : user.name}
       </li>
      ))} 
   </ul>
 );
}

export default UserList;