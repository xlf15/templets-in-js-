// temple string

// this is same as string 

let templet_string = `hello world`;
console.log(templet_string);


// example

let obj={
 item: "pen",
 price : 10
};

let the_output = `the price of the ${obj.item} is ${obj.price}` ;
console.log(the_output);
console.log("the price of the", obj.item , "is", obj.price);


// another example

let the_templet_lit = `the addition of 1 + 2 is ${1+2} `;
console.log(the_templet_lit);


// if we want new line then we can use sone special character in the console.log

let hello_world = "hello \nworld" ;  // this is for new line is \n 
console.log(hello_world);            
console.log(hello_world.length);


let hello_world2 = "hello \tworld " ;  // this is for tab space  
console.log(hello_world2) ; 
console.log(hello_world2.length);


let hello_world3 = "hello world";   // finding the length of the string     
console.log(hello_world3.length);


// this is string methods 

let string_methods = "sathya sachi paira";

let upper = string_methods.toUpperCase();  // this is an upper case

console.log(string_methods ,'= this is originl one');
console.log(upper,'= this is in upper case')

let string_methods2 = "SATHYA SACHI PAIRA";
let lower = string_methods2.toLowerCase(string_methods2); // this is a lower case 
console.log(string_methods2,'= this is original');
console.log(lower,'= this one is in lower case');


let string_methods3 = "  SATHYA SACHI PAIRA  ";
let trim = string_methods3.trim(string_methods3); // this is a lower case 
console.log(string_methods3,'= this one is original');
console.log(trim,'= ths one is trimmed one');

let slice_word = "abcdef";
let concat_word = 'ABCDEF';
let slice2 = slice_word.slice(2,5);  // this is slicing the word 
let concat_word2 = concat_word.concat(slice_word); // this is the joining the two words
console.log(slice_word);
console.log(concat_word);
console.log(slice2, '= this is slicing');
console.log(concat_word2,"= this is concat the two words");

let change_word = 'helloval';
let change_word2 = "hival" ;
let change_word3= change_word.replace(change_word,change_word2 ); // this is change the words
console.log("")
console.log(change_word,"= the original words") ; 
console.log(change_word2,"= the original words") ; 
console.log(change_word3,"= this is chnaging the word") ; 


let character_word ="i-love-hacking";
console.log(character_word);
console.log(character_word.charAt(3));
