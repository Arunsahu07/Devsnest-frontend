// call() apply() and bind() are used to change the value of this for a function .



person1={ firstName:'Arun',
         lastName:'Sahu',
        };

person2={
    firstName:'lzy',
    lastName:'cloud'

};


// call()  method invokes the function and allows to pass values 
//in arguments one by one  as comma sepated value
 function getName(place ,email){
    console.log(this.firstName,this.lastName,place,email);
}
getName.call(person2,'Bilaspur' ,'123@gmain.com');


// apply() method invokes the function and allows to pass arguments in the form of array
getName.apply(person1, ['raipur', '456@gmail.com'])


// bind() method returns reference of function its allows to pass th
// parameter. You can invoke the reference later.
let person1Info=getName.bind(person1,'raipur', '456@gmail.com');
person1Info();
