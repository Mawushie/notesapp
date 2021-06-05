import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNoteAction } from '../actions/noteActions';


class AddNote extends Component {
    constructor(props){
        super(props)

        this.state = {
            notetitle : "",
            notedate : "",
            notetext : ""
        };
    }

    handleOnChange = (event) =>{
        this.setState(
            { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        let noteId = 10000 + Math.random() * 10000000;
        let note = { ...this.state, id: noteId };
        this.props.addNewNote(note);
        //this clears whatever was typed initially into the form;basically resetting the form
        this.setState({
            notetitle : "",
            notedate : "",
            notetext : ""
        })
    }
    
    render() {
        // console.log(this.state);
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
                <textarea name="notetext" id="" cols="30" rows="10"  onChange = {this.handleOnChange} value={this.state.notetext}/>
                <br></br>

                <br></br>

                <button type="button" onClick = {this.handleSubmit} >Add Note </button>
               
        
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = {
    addNewNote : addNoteAction
}

export default connect(null, mapDispatchToProps)(AddNote)
