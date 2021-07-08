import './App.css';
import React from 'react';

function App() {
  let currCol=0;
  return ( 
    <div className='chessboard'>
      {
        new Array(8).fill().map( 
          function( value , index)
          { currCol++;
            return ( 
            <div className='row'>
              {
                new Array(8).fill().map( function(val, index){
                  currCol++;
                  return ( 
                    <div className='box' style={{ backgroundColor: currCol % 2===0 ? 'white' :'black'}}> </div>
                  )
                }  )
              }

            </div>
          )
           
          }

        )

      }
    </div>
   ) 
}




export default App;
