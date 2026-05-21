

function ColorList() {
const colors=[{name: "bleu"}, {name: "rouge"}, {name: "vert"}, {name: "gris"}];
 return (
   <ul>
     {colors.map(color => (
       <li key={color.name} > 
       {color.name==="rouge" ?  color.name.toUpperCase() : color.name}</li>
     ))}
   </ul>
 );
}

export default ColorList;