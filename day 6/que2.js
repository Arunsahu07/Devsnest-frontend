function array_Clone(array){
    return array.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// sample input
// [1, 2, 4, 0]
// [1, 2, [4, 0]]