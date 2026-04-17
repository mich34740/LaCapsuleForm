#!/usr/bin/env node
require('./models/connection'); 
const User = require('./models/Users');

const newUser = new User({name: "test", email: "cwxxqxfc@sfdgsqg.fr", age:15});
      newUser.save()
                .then(() => console.log("user enregistré"))
                .catch(err => console.error(err));
        