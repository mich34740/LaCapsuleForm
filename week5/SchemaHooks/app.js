#!/usr/bin/env node
require('./models/connection'); 

const Order = require('./models/orders');


// const newOrder = new Order({customerName: "les fours michaux", item: [{title: "cuivre", price: 5, quantite: 15},{title: "plomb", price: 10, quantite: 5}], status: "pending"});
//       newOrder.save()
//                 .then(() => console.log("order enregistré"))
//                 .catch(err => console.error(err));

                
function updateArticlePrice(orderId, itemTitle, newPrice) {
    Order.findById(orderId).then(data => {
      const itemUp = data.item.find(i => i.title === itemTitle);
      if (itemUp) {
         itemUp.price = newPrice;          
         data.save()
      }})
      .then(() => console.log("Mise à jour réussie"))
    .catch(err => console.error("Blocage :", err.message));
};

function updateOrderTotal(orderId, newTotal) {
    Order.findById(orderId).then(data => {
        data.totalPrice = newTotal;          
        data.save()
      })
      .then(() => console.log("Mise à jour réussie"))
      .catch(err => console.error("Blocage :", err.message));
};        
    
//updateArticlePrice("69e5ec1ef5fa0fff85f473f9", "cuivre", 6);
updateOrderTotal("69e5ec1ef5fa0fff85f473f9", 56);     