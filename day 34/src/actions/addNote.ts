export interface addType {
    type:"ADD_NOTE"
    payload:string,
}
function AddNote(note:string):addType{
    return {
        type: "ADD_NOTE",
        payload:note
    }
}
export default AddNote;