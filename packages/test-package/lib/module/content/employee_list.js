import React,{ Component } from 'react';
import {Employee} from '../../collections/collection.js';
import AddEmployee from '../modals/addEmployee.js';
import DeleteModal from '../modals/delete_confirm.js';
import { withTracker }from 'meteor/react-meteor-data';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataId:"",
		}
	}
	editEmployee(event) {
		event.preventDefault();
		let employee_Id = event.target.value;
		FlowRouter.go('/shubham/edit/'+employee_Id);
	}
	setModalId(id) {
		this.setState({
			dataId:id,
		});
	}
	render() {
		return(
			<div>
				<div className="bg-dark text-white text-center h1">
				  <p>Deligence Employee List</p> 
				</div>
				<button className="btn btn-success btn-sm mb-2" data-toggle="modal" data-target="#addEmployee">Add Employee</button>
				{
					this.props.employeeList?
						this.props.employeeList.length>0?
							<table className="table table-bordered table-striped table-hover">
                  				<thead className="bg-dark text-white text-center">
                    				<tr>
                    					<th>S.No.</th>
                          				<th>Name</th>
                          				<th>Designation</th>
                          				<th>Mobile No.</th>
                          				<th>Action</th>
                    				</tr>
                  				</thead>
                 				<tbody className="text-center">
                 					{
                 						this.props.employeeList.map((employee,index)=>{
                 							return(
                 								<tr key={index}>
                 									<td>{++index}</td>
													<td>{employee.name}</td>
													<td>{employee.designation}</td>
													<td>{employee.phone}</td>
													<td>
														<button className="btn bg-danger text-white border-white ml-1 fa fa-trash " data-toggle="modal" data-target="#deleteModal" onClick={(event) => {
															this.setModalId(employee._id)
															}
														}></button>
														<button className="btn bg-info text-white border-white ml-1 fa fa-edit" value={employee._id} onClick={this.editEmployee.bind(this)}>
														</button>
													</td>
												</tr>
                 							);
                 						})
                 					}
                 			    </tbody>
                 			</table>
						:<div className="bg-danger text-center text-white">
							<p>No Data!!!!!  Please Add</p>
						</div>
					:""
				}
				<AddEmployee />
				<DeleteModal id={this.state.dataId}/>
			</div>
		);
	}
}
export default withTracker((props) => {
	return {
		employeeList:Employee.find({},{sort:{createdAt:1}}).fetch(),
	};
})(App);