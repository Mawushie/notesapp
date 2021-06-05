import React, { Component } from 'react'
import Router from '../components/Router'
import NotesList from './NotesList'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12 notes">
                            <h3>My Notes</h3>
                            <Router />
                            <NotesList />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
