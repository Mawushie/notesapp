import React from 'react'
import {Link} from 'react-router-dom'

export default function AddNoteLink() {
    return (
        <div>
            <Link to = "/addnote" className = "links">
                <p>Add New Note</p>
            </Link>
        </div>
    )
}
