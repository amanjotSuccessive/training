import { Template } from "meteor/templating";
import './body.html';

// //Template.Child.helpers({parentText : "Hello"});

// Template.Child.onCreated(function ParentOnCreated() {
// //    this = new ReactiveVar(0);
//     console.log("this",this)
//     console.log(1,this.view.parentView.templateInstance().view);
//   });
//console.log(Template.Child);
//console.log(Template.Child.__helpers);

Template.first.helpers({
    showData: () => {return [{ name: "aman ", add: "delhi"},{name: "- Vishal ", add: "delhi"}]},
    showName: function () { return  this.name },
    
   
})
  Template.last.helpers({
    showLastData: () =>  {return [{ name: "Singh"},{name: "jindal"}]},
    showLastName: function ()  { return this.name    } ,
    getDetails: function () {
      console.log(this, );
    }
})
