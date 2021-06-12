function fre(array)
{   let fre = new Map();
    for(let i=0 ; i < array.length ; i++)
    { 
        if(fre.has(array[i]))
            fre.set(array[i] ,fre.get(array[i])+1);
        else
            fre.set(array[i],1);
        }
    let key=0;
    let value=0;
    for(let i of fre){
        if( i[1] > value){
            value= i[1];
            key=i[0];
        }
        
    }
    return { key , value};
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
const res= fre(arr1);
console.log(`${res.key} ( ${res.value} times)`);