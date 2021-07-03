import "./style.css";
const Board=()=>{
  const Row=()=>{
    return (
      <div className='row'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    )
  }
  return (
    <div className='chessBoard'>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
    </div>
  )
}
export default Board;