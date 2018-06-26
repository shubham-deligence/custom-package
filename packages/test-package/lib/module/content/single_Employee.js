import React,{ Component } from 'react';
import {Employee} from '../../collections/collection.js';
import AddEmployee from '../modals/addEmployee.js';
import { withTracker }from 'meteor/react-meteor-data';
class Single_Employee extends Component {
	updateEmployee() {
		event.preventDefault();
		let name = $("#name").val();
		let phone = $("#number").val();
		let desg = $("#selectDes").val();
		let id = this.props.employeeList._id;
		if(name == "" || desg == "")
			Bert.alert("Please Fill Data","info","growl-top-right","fa-info");
			else {
				Meteor.call('updateEmployee',name,phone,desg,id,(error,data) => {
				if(error) {
					Bert.alert("Unable To Update Employee","info","growl-top-right","fa-info")
				}
				else {
					Bert.alert(name+" Employee Is Updated","success","growl-top-right","fa-check");
				}
			
			});
		}
	}
	EmployeeList() {
		FlowRouter.go('/shubham');
	}
	render() {
		return(
			<div>
				<div className="bg-dark text-white text-center h1">
				  <p>Deligence Employee List</p>
				  <p>Update Record</p> 
				</div>
				<button className="btn btn-success btn-sm  mb-2 offset-sm-8" onClick={this.EmployeeList.bind(this)}>Employee List</button><br />
				<button className="btn btn-danger btn-sm mb-2" onClick={this.EmployeeList.bind(this)}>Cancle</button>
				<button type="button" className="btn btn-primary btn-sm mb-2 ml-1 text-center" onClick= {this.updateEmployee.bind(this)}>Save</button>
				{
					this.props.employeeList?
							<form  className = "form-horizontal" role = "form" onSubmit={this.updateEmployee.bind(this)} > 
			              		<div className = "form-group">
			                		<label htmlFor = "articleTitle" className = "col-sm-4 control-label">Name</label>
			                		<div className = "col-sm-12">
			                 			 <input type = "text" id="name"  className = "form-control" placeholder = "Enter Name" defaultValue = {this.props.employeeList.name} key = {this.props.employeeList._id}/>
			                		</div>
			              		</div>
			              		<div className = "form-group">
			                		<label htmlFor = "articleTitle" className = "col-sm-4 control-label">Phone No.</label>
			                		<div className = "col-sm-12">
			                 			 <input type = "text" id="number"  className = "form-control" placeholder = "Enter Phone No." defaultValue = {this.props.employeeList.phone} key = {this.props.employeeList._id}/>
			                		</div>
			              		</div>
			              		<div className = "form-group">
					              	<label htmlFor = "selectCat" className = "col-sm-2 control-label">Designation</label>
					              	<div className = "col-sm-12"> 
						                <select id="selectDes" className = "form-control" key = {this.props.employeeList._id} defaultValue = {this.props.employeeList.designation
}>
						                	<option className="form-control" value="" >---Select---</option>
						                	<option className="form-control" value="Developer" >Developer</option>
						                	<option className="form-control" value="Designer" >Designer</option>
						                	<option className="form-control" value="Digital Marketing" >Digital Marketing</option>
						                </select>
						            </div>
					            </div>
					        </form>
						:<div className="bg-danger text-center text-white">
							<p>No Data!!!!!  Please Add</p>
						</div>
				}
				<AddEmployee />
			</div>
		);
	}
}
export default withTracker((props) => {
	return {
		employeeList:Employee.findOne({}),
	};
})(Single_Employee);