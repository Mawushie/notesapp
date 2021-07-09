import React from 'react';
import { connect } from 'react-redux';
import { editNotesAction } from '../actions/noteActions';

class EditNotes extends React.Component{
    constructor(props){
        super(props)

        //autofill the edit form with the info saved already
        this.state = {
            notetitle: this.props.note.notetitle,
            notedate: this.props.note.notedate,
            notetext : this.props.note.notetext
        };
    }
    //set the value of what is typed by user into the state
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }
 
    handleSubmit = () => {
        let note = {...this.state, id: this.props.note.id}
        this.props.editNote(this.props.note.id, note);
        this.props.closeModal();
    }

    render(){
        return (
            <div>
                <form>
                    <label>Title</label> <br></br>
                    <input type = "text" name = "notetitle" value = {this.state.notetitle} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Date</label> <br></br>
                    <input type = "date" name = "notedate" value = {this.state.notedate} onChange = {this.handleOnChange} ></input> <br></br>
                    <br></br>
                    
                    <label>Type Notes Here</label> <br></br>
                    <textarea name="notetext" id="" cols="30" rows="10"  onChange = {this.handleOnChange}>{this.state.notetext}</textarea>
                    <br></br>

                    <br></br>
                    
                     <button type="button" onClick = {this.handleSubmit}>Update</button>

                </form>
            </div>
        )
    }
  

}

const mapDispatchToProps = {
    editNote : editNotesAction
}

export default connect(null, mapDispatchToProps)(EditNotes);