 function first(array,n=1){
        if (n<0)
        return [];
    
    return array.slice(0,n);}
    function getFirstNElements(arr, n = 1) {
        if (n < 0) {
          return [];
        }
        return arr.slice(0, n);
      }
    
    
    // sample input
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));