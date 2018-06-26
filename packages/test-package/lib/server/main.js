import { Meteor } from 'meteor/meteor';
import {Employee} from '../collections/collection.js'
Meteor.startup(() => {
  	Meteor.publish("employee_list",function (){
  		return Employee.find();
  	});
	Meteor.publish("singleEmployee",function (id){
		return Employee.find({_id:id});
  	});
});
