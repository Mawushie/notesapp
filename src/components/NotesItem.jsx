import React from "react";
import {Modal} from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteNotesAction } from "../actions/noteActions";
import EditNotes from "./EditNotes";


class NotesItem extends React.Component{
    constructor(props){  
        super(props)
        this.state = {
            show : false
        };
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.note.id); 
    }

    closeModal = () =>{
        this.setState(
           {show : false}
        )
    }
    showModal = () =>{
        this.setState(
            {show : true}
        )
    }
    render(){
        return(
            <div className = "row" style = {{marginLeft : 20, marginTop :20}}>
         
            <div className = "col-md-1 text-center">
                <h4>Title</h4>{this.props.note.notetitle}
            </div>
            <div className = "col-md-3 text-center">
                <h4>Note Details</h4>{this.props.note.notetext}
            </div>

            <div className = "col-md-2 text-center">
                <h4>Date</h4>{this.props.note.notedate}
            </div>

            <div className = "col-md-2 text-center">
             <h4>Actions</h4>
                <i class="fa fa-pencil editdelete" aria-hidden="true" onClick = {this.showModal} > Edit</i> 
                <i class="fa fa-minus-circle editdelete" aria-hidden="true" onClick = {this.handleDelete}> Delete</i>
                   
            </div> 
           

            
                <Modal show={this.state.show} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Note </Modal.Title>
                  </Modal.Header>

                  <Modal.Body >
                    <EditNotes 
                    note = {this.props.note}
                    updateNote = {this.props.updateNote} 
                    closeModal = {this.closeModal}/>
                  </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteNote : deleteNotesAction
}

export default connect(null, mapDispatchToProps)(NotesItem);

