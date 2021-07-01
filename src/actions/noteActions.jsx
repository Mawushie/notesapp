import { getFirestore } from "redux-firestore"
import notesReducer from "../reducers/notesReducer"

export function addNoteAction(newNote){
   return async(dispatch,state, {getFirestore})=>{
    const db = getFirestore()
        try {
            await db.collection('Notes').add(newNote)
        } 
        catch (error) {
            console.log(error)
        }
   }
}

export function getAllNotesAction(){
    return(dispatch,state,{getFirestore})=>{
        const db = getFirestore()
        db.collection('Notes').onSnapshot(
            (results)=>{
               let notesindb = []
               results.forEach((doc)=>{
               let note = doc.data()
               note.id = doc.id
               notesindb.push(note)
            })

            dispatch({ //now send the data to the reducer
                type: "GET_ALL_NOTES",
                payload : notesindb
            })
        },(error)=>{
            console.log(error)
            }
        
        )
    }
}



export function editNotesAction (id, updatedNote){
    return async (dispatch,state, {getFirestore}) =>{
        const db = getFirestore()
        try {
           await db.collection('Notes').doc(id).update(updatedNote) 
        } 
        catch (error) {
          console.log(error)  
        }
    }
  
}

export function deleteNotesAction(id){
    return async (dispatch, state, {getFirestore}) =>{
        const db = getFirestore()
        try {
            await db.collection('Notes').doc(id).delete()
        } 
        catch (error) {
            
        }
    }
}
