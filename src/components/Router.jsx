import React from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import AddNote from '../pages/AddNote'
import HomePage from '../pages/HomePage'
import AddNoteLink from './AddNoteLink'

export default function Router() {
    return (
        <div>  
            <BrowserRouter>
                <AddNoteLink />
                    <Switch>
                        <Route exact path = "/addnote" component = {AddNote}/>
                    </Switch>
            </BrowserRouter>
        </div>
    )
}
