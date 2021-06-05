var initialState = {
    notes : []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
           return{
               ...state , notes : [...state.notes , action.payload]
           }

            
        case "EDIT_NOTE":
            var id = action.payload.id;
            let updatedNotesInfo = action.payload.updatedNotesInfo;
            let notesAfterUpdate = state.notes.map((note) => {
              if (note.id === id) {
                return updatedNotesInfo;
              }
              return note;
            });
            return { notes: notesAfterUpdate };
        
        case "DELETE_NOTE":
            var id = action.payload;
            let notesAfterDelete = state.notes.filter((note) => note.id !== id);
            return { notes: notesAfterDelete };
            
        default: 
           return state;
    }
}

export default notesReducer;