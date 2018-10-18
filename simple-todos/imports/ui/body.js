import { Template } from 'meteor/templating';
 
import './task.js';
import './body.html';
 
import { Tasks } from '../api/tasks';

Template.body.helpers({
    tasks(){
         // Show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } });
    },
});

Template.body.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
      // console.log('class',document.getElementsByClassName('new-task'))
      // Get value from form element
      const target = event.target;
      console.log(target);
      console.log('value',target.tet.value);
      const text = target.tet.value;
   
      // Insert a task into the collection
      Tasks.insert({
        text,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.tet.value = '';
    },
  });