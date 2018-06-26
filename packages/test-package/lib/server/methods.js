import {Employee} from '../collections/collection.js';
Meteor.startup(() => {
	 Meteor.methods({
		addEmployee(name,phone,designation) {

			Employee.insert({
				name:name,
				createdAt:new Date(),
				phone:phone,
				designation:designation,
			});
		},
		updateEmployee(name,phone,designation,id) {
			Employee.update(id,{$set:{
					name:name,
					createdAt:new Date(),
					phone:phone,
					designation:designation,
				}
			});
		},
		delete(id) {
			Employee.remove({_id:id});
		}
	});
});
