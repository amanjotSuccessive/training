import './inputSelectTemplate.html';
import { Template } from 'meteor/templating';

Template.inputSelect.helpers({
  runner () {
    const a = [];


    let i;
    for (i = 18; i <= 100; i++) {
      a.push({
        age: i,
      });
    }
    return a;
  },
});
