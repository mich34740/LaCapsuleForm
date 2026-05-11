const mongoose = require('mongoose');
const User = require('../models/user');
const dbHandler = require('../models/db-handler'); // Un module pour gérer la connexion de test
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer;



afterEach(async () => {
 await dbHandler.clearDatabase();
});

describe('User Model Test', () => {
 it('create & save user successfully', async () => {
   const userData = { username: 'John Doe', age: 42, email: 'john@test.com' };
   const validUser = new User(userData);
   const savedUser = await validUser.save();

   // Les objets ont des identifiants définis lorsqu'ils sont enregistrés
   expect(savedUser._id).toBeDefined();
   expect(savedUser.username).toBe(userData.username);
   expect(savedUser.email).toBe(userData.email);
   expect(savedUser.age).toBe(42); // Default value test
 });
});