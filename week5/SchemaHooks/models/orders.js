const mongoose = require('mongoose');
const { capitalizeWords } = require('./utils');

const orderSchema = mongoose.Schema({
    customerName: {type: String, required: [true, 'Veuillez saisir le nom!!'], trim: true},
	  item: {type: [{title: String, price: Number, quantite: Number}]},
    totalPrice: {type: Number, min: 0},             
    status: {type: String, enum: ['pending', 'completed', 'cancelled']},             

    // interestTags: {type: [String], set: arr => arr.map(t => t.toLowerCase()), validate: {validator: function(arr) {return arr.length<=5;}, message: "Maximun 5 tags autorisés"}},             
    // isActive: {type: Boolean, default: true},
    // bio: {type: String, validate: {validator: function(value) {
		//      return (!value || value.length<=1000);}, message: 'La bio ne doit pas dépasser 1000 caractères!!'}},
    // rue: {type: String},
    // codePostal: {type: Number, min: 10000, max: 99999},
    // ville: {type: String} 
});

 orderSchema.pre('validate', function() {
    if (this.customerName) {
        this.customerName=capitalizeWords(this.customerName);
    }
    this.totalPrice=0 
    if (this.item && this.item.length > 0) {
      for (let i=0; i<this.item.length; i++) {
        this.totalPrice+=this.item[i].quantite*this.item[i].price;
      }
    }  
 });
 
 orderSchema.pre('save', function() {
  let Total = 0;
  console.log('presave');
  if (this.item && this.item.length > 0) {
      for (let i=0; i<this.item.length; i++) {
        Total+=this.item[i].quantite*this.item[i].price;
      }
  }  
  if (Total!==this.totalPrice) {
    const err = new Error("Enregistrement refusé : Le montant total doit être égal à la somme des achats.");
        return err;
  }
 });

 orderSchema.post('save', function() {
    console.log(`Commande pour ${this.customerName} enregistré pour un montant de ${this.totalPrice} euros`);
 });

  const Order = mongoose.model('orders', orderSchema);

module.exports = Order;