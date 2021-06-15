// Write a JavaScript program to get the volume of a Cylinder with four decimal places using 
// object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height 
// of the cylinder. Try To Attempt : Difficult Level Increased
class volumeOfCylinder{
    constructor(radius, height){
        this.radius=radius;
        this.height=height;

    }
    getVolume(){
    return ((2*22*this.radius*this.height)/7).toFixed(4);
}}
let a= new volumeOfCylinder(8,9).getVolume();
console.log(a)
//output: 452.5714

let b=new volumeOfCylinder(5,6).getVolume()
console.log(b);
// output : 188.5714


