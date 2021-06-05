export function addNoteAction(newNote){
    return{
        type: 'ADD_NOTE',
        payload: newNote  
    }
}

export function editNotesAction (id, updatedNote){
    return{
    type: 'EDIT_NOTE',
    payload: {
        id: id,
        updatedNotesInfo : updatedNote
    }
    }
}

export function deleteNotesAction(id){
    return{
        type: 'DELETE_NOTE',
        payload: id
    }
}