import React from 'react';
import { connect } from 'react-redux';
import { getAllNotesAction } from '../actions/noteActions';
import NotesItem from './NotesItem';


class NotesList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllNotesAction()
    }
    
    render(){
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
        
                        {this.props.notesData.map((note) => {
                            return <NotesItem  
                            note = {note} key={note.id} 
                        />;
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
    notesData : state.notes
}
}

const mapDispatchToProps = {
    getAllNotesAction
}
export default connect(mapStateToProps , mapDispatchToProps)(NotesList);