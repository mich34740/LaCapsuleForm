#!/usr/bin/env node
require('./models/connection'); 
const User = require('./models/Users');

const newUser = new User({name: "test1", email: "cxcxvqxfcsf@ghdgsqg.fr", age: 18, interestTags: ["a","b","c","d","e"], bio: "dkfhgedoifgofgdklfxhgdkfhgdhfgdkf", rue: "djkfghdkjxfhd"});
      newUser.save()
                .then(() => console.log("user enregistré"))
                .catch(err => console.error(err));
        