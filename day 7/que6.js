

// Write a JavaScript program to sort an array of JavaScript objects

 var library = [
     { 
         title: 'The Road Ahead', 
         author : "Bill Gates" , 
         libraryID : 1254 
    }, 
    { 
        title: 'Walter Isaacson',
         author: 'Steve Jobs', 
         libraryID: 4264 
    }, 
    { 
        title: "Mockingjay: The Final book of hunger games",
        author : 'suzzale collins' ,
        libraryID : 3245,
    },
];
library.sort((a,b)=>{
    if (a.title< b.title)
    return -1
    return 1
});
console.log(library);

//  Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, { author: "Suzanne Collins", libraryID: 3245, title: `Mockingjay: The Final Book of The Hunger Games` }, 