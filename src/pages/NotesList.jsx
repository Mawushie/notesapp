import React from 'react';
import { connect } from 'react-redux';
import NotesItem from './NotesItem';

class NotesList extends React.Component{
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
export default connect(mapStateToProps)(NotesList);