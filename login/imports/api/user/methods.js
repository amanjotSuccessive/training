import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Users from './users';

/*
Method to create new User and enter user data in database.
In first step it uses services to create account
from above step it create user and get user id then
insert the user data in the respective row.
*/
Meteor.methods({
  registerUser (username, city, address, age, password) {
    // console.log("registerUser", userName, city, address, age, password);
    const userId = Accounts.createUser({
      username,
      password,
    });
    // console.log("userId",userId);
    Users.update({ _id: userId }, {
      $set: {
        city,
        address,
        age,
      },
    });
  },

});


