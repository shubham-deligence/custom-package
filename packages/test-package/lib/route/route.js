import App from '../module/content/employee_list.js';
import Single_Employee from '../module/content/single_Employee.js';
FlowRouter.route('/shubham', {

	subscriptions: function() {
    	this.register('employee_list',Meteor.subscribe('employee_list'));
  	},
    action: function(params, queryParams) {
        ReactDOM.render(<App />,document.getElementById("target"));
        //FlowRouter.go('/shubham');
    }
});
FlowRouter.route('/shubham/edit/:id', {
	subscriptions: function(params, queryParams) {
    	this.register('singleEmployee',Meteor.subscribe('singleEmployee',params.id));
  	},
    action: function(params, queryParams) {
        ReactDOM.render(<Single_Employee />,document.getElementById("target"));
        //FlowRouter.go('/shubham');
    }
});