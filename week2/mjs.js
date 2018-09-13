// Ex 1 
let ar = "Salam Alaycom" ,   // arabic
    en = "Hello World" ,    // english
    du = "Hello Wereld" ,       // dutch
    fr = "Salut le monde" ;     // france
 
console.log(ar + "\n", en + "\n", du + "\n", fr);

//Ex 2

console.log("I'm awesome");

//Ex 3

let x , y , z , a , b;

console.log("the value of my variable 'x' will be a number '1 -- 10 ' ");
console.log(x);
x=5;
console.log("the value of my variable 'x' will be an integer ");
console.log(x);

//Ex 4

y = "Jan";
console.log("the value of my variable 'y' will be a first name ");
console.log(y) ;

y = "Piter"
console.log("the value of my variable 'y' will be a last name ");
console.log(y) ;

//Ex 5
z = 7.25;
console.log(z) ;
a=Math.round(z) ; 
console.log(a) ; 

if(a>z){
    b = a ;
} else {
    b = z ;
}

console.log(b);

// Ex 6 Array

let cars = []                                                      //6.1
console.log("the value of the cars array contain cars names");     //6.2
console.log(cars);                                                 //6.3

let cuteAnimals = ['Cat', 'Bunny', 'Hamster', 'Panda'];            //6.4
console.log(cuteAnimals);                                          //6.5

cuteAnimals[cuteAnimals.length] = 'baby pig' ;                     //6.6
console.log(cuteAnimals);                                          //6.7

//Ex 7  More Strings

let myString = "this is a test" ;                
console.log(myString);                                             //7.1
let lengthOfmystring = myString.length ;                           //7.2
console.log(lengthOfmystring) ;                                    //7.3


//Ex 8  Program for Checking type

let colour = "red" ,                                               //8.1
    num = 9 ,   
    fruit = ["apple", "kiwi"]
    box = null ;
                                                                  //8.2
console.log('The value of my variable colour is: ' + colour);    
console.log('The value of my variable num is: ' + num);    
console.log('The value of my variable fruit is: ' + fruit);    
console.log('The value of my variable box is: ' + box);    

console.log('The type of my variable colour is a string');
console.log('The type of my variable num is a number');
console.log('The type of my variable fruit is an object');
console.log('The type of my variable box is an object');

let colourType = typeof(colour),                                  //8.4
    numType = typeof(num) ,
    fruitType = typeof(fruit),   
    boxType = typeof(box) ;
                                                                  //8.5 + 8.6
if (colourType === numType){
    console.log( "colourType and numType is the same type")

} else if (colourType=== fruitType){
    console.log( "colourType and fruitType is the same type")

} else if(colourType=== boxType){
    console.log( "colourType and boxType is the same type")
}

else{
    console.log("colourType is not the same type with other")

}

if (numType === fruitType){
    console.log( "numType and fruitType is the same type")
    
} else if(numType=== boxType){
    console.log( "numType and boxType is the same type")
}

else{
    console.log("numType is not the same type with other")

}

if(fruitType=== boxType){
    console.log( "fruitType and boxType is the same type")
}

else{
    console.log("fruitType is not the same type with other")

}

// Ex 9

let w=11 , r=4;

console.log("w = " + w);
console.log("r = " + r);
console.log("w % r = " + w%r);

// Ex 10

let myArr=["red", "black", 50];
console.log(myArr)

function compInf(g) {
    if(g === Number.POSITIVE_INFINITY){
        return "the number is possitive infinity"
    }else if(g === Number.NEGATIVE_INFINITY){
        return "the number is negative infinity"
    }
    return "the value of the number is " + g
}
console.log(compInf(Number.MAX_VALUE))
console.log(compInf(Number.MAX_VALUE*4))
console.log(compInf(-Number.MAX_VALUE))
console.log(compInf(-Number.MAX_VALUE*4))
