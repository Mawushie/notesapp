import React, { Component } from 'react'
import AddNote from './AddNote'
import NotesList from './NotesList'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                         <h3>My Notes</h3>
                        <div className = "col-md-4 notes">
                            
                            <AddNote />
                        </div>

                        <div className = "col-md-8 noteslist">
                            <NotesList />
                        </div>
                     </div>

                 </div>

            </div>
           
        )
    }
}
