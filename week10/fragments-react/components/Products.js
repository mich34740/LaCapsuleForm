import React from "react";



function ProducList({ items }) {
 return (
   <>
     {items.map(item => (
       <React.Fragment key={item.id}>
         <h2>{item.name}</h2>
         <p>{item.desc.slice(0, 20)}</p>

          {item.desc.length > 20 && (
            <p>{item.desc.slice(20)}</p>
          )}
       </React.Fragment>
     ))}
   </>
 );
}


export default ProducList;