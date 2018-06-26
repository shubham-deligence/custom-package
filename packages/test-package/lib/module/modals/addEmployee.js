import React,{ Component } from 'react';
export default class AddEmployee extends Component {
	addEmployee(event) {
		event.preventDefault();
		let name = $("#name").val();
		let phone = $("#number").val();
		let desg = $("#selectDes").val();
		if(name == "" || desg == "")
			Bert.alert("Please Fill Data","info","growl-top-right","fa-info");
			else {
				Meteor.call('addEmployee',name,phone,desg,(error,data) => {
				if(error) {
					Bert.alert("Unable To Add Employee","info","growl-top-right","fa-info")
				}
				else {
					Bert.alert(name+" Employee Is Added","success","growl-top-right","fa-check");
					$("#name").val("");
					$("#number").val("");
					$("#selectDes").val("");
					$('#addEmployee').modal('hide');
				}
			
			});
		}
	}
	render() {
		return(
			<div>
				<div className="modal fade" id="addEmployee" tabIndex="-1" role="dialog" aria-labelledby="addEmployeeLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <div className="panel-body custom-panel">
				        	<form  className = "form-horizontal" role = "form" onSubmit={this.addEmployee.bind(this)} > 
			              		<div className = "form-group">
			                		<label htmlFor = "articleTitle" className = "col-sm-4 control-label">Name</label>
			                		<div className = "col-sm-12">
			                 			 <input type = "text" id="name"  className = "form-control" placeholder = "Enter Name"  />
			                		</div>
			              		</div>
			              		<div className = "form-group">
			                		<label htmlFor = "articleTitle" className = "col-sm-4 control-label">Phone No.</label>
			                		<div className = "col-sm-12">
			                 			 <input type = "text" id="number"  className = "form-control" placeholder = "Enter Phone No."  />
			                		</div>
			              		</div>
			              		<div className = "form-group">
					              	<label htmlFor = "selectCat" className = "col-sm-2 control-label">Designation</label>
					              	<div className = "col-sm-12"> 
						                <select id="selectDes" className = "form-control">
						                	<option className="form-control" value="" >---Select---</option>
						                	<option className="form-control" value="Developer" >Developer</option>
						                	<option className="form-control" value="Designer" >Designer</option>
						                	<option className="form-control" value="Digital Marketing" >Digital Marketing</option>
						                </select>
						            </div>
					            </div>
					        </form>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
				        <button type="button" className="btn btn-primary" onClick= {this.addEmployee.bind(this)}>Save</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		</div>
		);
	}
}