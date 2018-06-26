import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
export default class DeleteModal extends Component {
  deleteData() {
    let id = $("#dataId").val();
    Meteor.call('delete',id,(error,data) =>{
        if(error) {
          Bert.alert("Unable To Delete Menu","info","growl-top-right","fa-info")
        }
        else {
          Bert.alert(" Employee Is Deleted","success","growl-top-right","fa-check");
        }
      
      });
  }
  render() {
    return(
      <div className="modal fade" id="deleteModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Delete Employee</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  Are you sure ?
                  <input type="text" id="dataId" value={this.props.id} hidden />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-dark text-white border-white" data-dismiss="modal">No</button>
                  <button type="button" className="btn bg-dark text-danger border-white" data-dismiss="modal" onClick={this.deleteData.bind(this)}>Yes</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
} 