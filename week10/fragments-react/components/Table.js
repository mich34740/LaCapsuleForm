import React from "react";

const data = [
  { id: 1, name: "Produit 1", price: 10 },
  { id: 2, name: "Produit 2", price: 20 },
  { id: 3, name: "Produit 3", price: 30 }
];

function Table() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <React.Fragment>
              <td>{item.name}</td>
              <td>{item.price} €</td>
            </React.Fragment>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;