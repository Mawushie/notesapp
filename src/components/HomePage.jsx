import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../actions/authActions'
import AddNote from './AddNote'
import NotesList from './NotesList'


class HomePage extends Component {
    constructor(props){
        super(props)
    }

    handleLogOut =() =>{
        this.props.logOutAction()
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = 'row text-right'  style ={{padding : 20}}>
                        <button type = 'button' onClick = {this.handleLogOut}>Log Out</button>
                    </div>
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

const mapDispatchToProps = {
    logOutAction
}

export default connect(null, mapDispatchToProps)(HomePage)
