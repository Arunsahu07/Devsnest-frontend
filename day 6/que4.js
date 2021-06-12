function joiner(array){
    let first=array.join(",");
    let second=array.join("+");
    return [first,second];
}
// sample input
array=["Red", "Green", "White", "Black"];
console.log(joiner(array));