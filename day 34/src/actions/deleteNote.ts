export interface delType {
  type: "DELETE_NOTE";
  payload: number;
}
function DeleteNode(idx: number): delType {
  return {
    type: "DELETE_NOTE",
    payload: idx,
  };
}
export default DeleteNode;