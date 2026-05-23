// function Greeting({firstName, lastName}) {
//   return (
//       <p>Hello, {firstName} {lastName}!</p>
//   );
// }
function Greeting(props) {
    const {firstName, lastName} = props;

    return (
       <p> Hello, {firstName} {lastName}!</p>
   );
}
export default Greeting;
