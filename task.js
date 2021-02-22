//escaping literal quotes
 var s="I am a \"double quoted\" string in \"single auote\"";
 console.log(s)
//escape sequsnce instring
var s1="first line \n\t seond line \n\t\\ Third line";
console.log(s1);
//string immutability
var str="Jii World!";
str[0]="H";
console.log(str);   // lead to an error due to immutable behvaiour of string
//last chareter of string is "string_name.length-1"

//arrays in JS
var a=[1,2,3]
a[1]=100
console.log(a);   // o/p is [1,100,3]
// nested arrays
var data=a1[1]
var a1=[["apple",2],["mango",3]]
console.log(data);    //o/p is ["mango",3]
//push()
a1.push(["orange",4])
console.log(a1);    //o/p is [["apple",2],["mango",3],["orange",4]]
//pop(), shift() and unshioft()
a.pop()
console.log(a);   //o/p is [1,2]
var a3=a.shift()
var a4=a.unshift(99)
console.log(a3);  //1
console.log(a);    //[1,2,99]

//global scope
var g=10;
function f1() {
  g1=99; //it'll consider as global
  var l=999 // local for this function
}
console.log(g); //10
console.log(g1);    //99
console.log(l);   //error, bcz of local to variable
//important note is local variablet takes over the globalvariable if both have same string_name

//to convert to string inbuit method is
var arr=[1,2,3,4,5]
JSON.stringify(arr)

//strict equality
//3===3   and  "3"==="3"//reutrn true
//here it is comapring the data type of the variables
//99==="99"     //return false
//(similer process for strit in-equality operators)

// Equality operator
//3=="3"    //return true bcz "3" convert to number and comapre in "==" operator

//Switch statement
//test case 1-"A", 2-"B", 3-"C"
function switchfun(val) {
  var ans=""
  switch(val){
    case 1:       // checks val==1 or not
      ans="A";
      break;      // if break is not present it'll execute all the below case
    case 2:       // checks val==2 or not
      ans="B";
      break;
    case 3:       // checks val==3 or not
      ans="C";
      break;
    default:      //if no case is matched it'll get executed
    ans="no such value"
  }
  return ans;
}
console.log(switchfun(3));    // o/p is "C"
console.log(switchfun(10));   //default ans is "no such value"

//multiple identical in switch statement
var ans="";
var val;
switch(val){
  case 1:
  case 2:
  case 3:
    ans="low"
    break;
  case 4:
  case 5:
  case 6:
    ans="high";
    break;
}console.log(ans);    //if val is 1/2/3 then it'll print "low" if val is 4/5/6 it'll print "high"
// using switch statement we can replace if - else if - else statemnts
// Math.round(), used to get whole number ex= 7.98 = 8 or 7.34=7

//OBJECTS
//to test object for properties
var obj={a:apple,b:"ball",c:"car"};
function fun1(prop) {
  if (obj.hasOwnProperty(prop)){    //obj.hasOwnProperty(property_name) is buit-in method
    return obj[prop];
  }else{
    return "no such properties";
  }
}
console.log(fun1(b));   //"car"

//array can store the objects in key-value pair
var arr=[
  {
    "name":"Adi","DOB":"01-01-1999","likes":["swimming","bike"]
  },
  {
    "name":"Bharat","DOB":"13-03-1991","likes":["volleyball","car"]
  }
];
//to access object from array we can use index number
console.log(arr[0]);    /*{
                          "name":"Adi","DOB":"01-01-1999","likes":["swimming","bike"]
                        }*/
//using similer method we can access the nested objects using "." ot "[]"
var myfilms={
  "v1":{
    1:"Marvel",
    2:"DC commics",
    3:"KGF"
  },
  "v2":{
    1:"English films",
    2:"Hindi films"
  }
};
//if property name is string we should not use " " to get property of object
//if we use " " then it'll give unexpected string error
console.log(myfilms.v1[1]);   //"Marvel"
console.log(myfilms.v2[1]);   //"English films"
console.log(myfilms.v1[3]);    //KGF
//to get copy of the object in JS then
// JSON.prase(JSON.stringify(object_name)) we have to use this to get copy of the present object

//iterate array using for loop
var ar=[9,10,11,12];
var c=0;
for (var i=0;i<ar.length;i+=1){
  c+=ar[i];
}
console.log(c);   //output is 42
//for the nested array we have to use 2 for loops
var aa=[[1,2],[3,4],[5,6]];
var add=0;
for (var i=0;i<aa.length;i++){
  for (var j=0;j<aa[i].length;j++){
    add+=aa[i][j];
  }
}
console.log(add);   //21

//Generatig rsndom fraction
Math.random();    //returns fraction between 0 and 1, it can take 0 but not 1
console.log(Math.random());  // 0/0.454/0.9875 but not 1
//Generatig random whole numbers
var w=Math.floor(Math.random()*10);  //this will gice whole number, the maximum random value we can get is 9 but not 10
//random number within range
Math.floor(Math.random()*(max-min+1))+min;  //this gives random number between two range, ex min=5 and max=15, then in between 5 to 15 we'll get randomnumbers

//parseInt using radix
function fun2(str) {
  return pasrseInt(str,2);    //2 denotes binary, default value is base 10
}
console.log(fun2("101101"));    //101101 string to binary

//ternary operators
//similler to if-else condition
//syntax is
condition ? true : false ;
function f(a,b) {
  return a==b ? true : false;
}console.log(f(3,3));   //o/p is true
//we can use ternary opeartor for multiple condition, similerly like if - else if -else condition
//syntax is
condition ? true : condition ? true : false
function f3(a,b) {
  return a>b ? "a is big" : a<b ? "b is big" : "a and b are equal";
}
console.log(f3(5,2));   // a is big
console.log(f3(5,9));   //b is big
console.log(f3(5,5));   //a and b are equal

// "var" keyword is like decalring variable in global space
// "let" keyword is used to declare variable to that particular block of code we cant accessit ouside the block
// if we "var" keyword we don't get the error, we don't get what is the error
//using "const" keyword it'll create read-only variables in JS. once the value or string is assigned to variable with const keyword then we can't modify it

//mutate an array declared with const
var a=[2,5,7] ;
function arrmutate(s) {
  //s=[5,7,3]       //gives an error
  s[0]=100;
  s[1]=99;
  s[2]=88;
}
arrmutate(a);
console.log(a);     //[100,99,88]

//prevent object mutation with object.freeze(object_name)
function freeze(){
  const MATH_C={
    PI:3.142
  };
  object.freeze(MATH_C);    // if we use this we cant change the propery of the object
  try{
    MATH_C.PI=99;
  }catch(ex){
    console.log(ex);
  }
  return MATH_C.PI;
}
const PI=freeze();    //typeError, bcz of object.freeze(object_name)
                      //if object.freeze(object_name) it is not present then we can mutate the object property

//arrow function to write anonnymus function with arguments
const m = (a,b) => {
  return a+b;
}
console.log(m(10,20));    //o/p is 30

//built in method to check wether number is integer or note
Number.isInteger(num) //return wether number is Interger or note

//filter and map function
const a=[4,9.6,8,4,6,9,7.33,1.33,3];
const af=a.filter(num => Number.isInteger(num) && num>0);
const am=af.map(x => x*x);
console.log(af);   //[4,8,4,6,9,3]
console.log(am);   //[16,64,16,36,81,9]

var v={x:36,y:74,z:65};
//destructiong assignment to assign variable from object
var x=v[x];    //x=36
var y=v[y];
var z=v[z];
const {x:a,y:b,z:c}=v;  //takes the value of "x" and assign to "a" same for "y to b" and "z to c"

//destructiong assignment with nested object
const w={
  today:{min:72, max:82},
  tomarrow:{min:73.3, max:84.6}
};
function dest(wz) {
  const{tomarrow : { min : temp}}=wz;
  return temp;
}console.log(dest(w));    //o/p is 84.6

//destructiong assignment to assign variable from arrays
const [z,x,,y]=[1,2,3,4,5,6,7,8,9];
console.log(z,x,y);   //o/p is 1,2,4

//writing string template itearte
const p={
  name:"aditya",age:23
};
const g="hello world, my name is ${p.name} ! I am ${p.age} years old";
console.log(g);     // ${ } used to itrate the JS object property

//same key and value name is there the simple way to write object is
const p=(name,age,gender)=>({name,age,gender});
console.log("Aditya",22,"male");    //{name:"Aditya",age:22,gender:"male"}


//usage of "class" keyword
class c1{
  constructor(target){
    this.target=target;
  }
}
var c=new c1("jupiter");
console.log(c.target);      // "jupiter"

//getter and setter

class Book{
  constructor(author){
    this._author=author;
  }
  get writer(){
    return this._author;
  }
  set writer(author){
    this._author=author;
  }
}
var b=new Book("Chetan Bhagath");
let a=b.writer;              //calling getter
console.log(a);             // o/p is "Chetan Bhagath"
b.writer="Lee child";        //calling setter
a=b.writer;                  //calling getter and returned value stored in a by removing old name
console.log(a);           // o/p is "Lee child"


//import and export
//exporting from one file to other

export capital=str=>str.toUpperCase()   //consider it is in string_fun.js file
import {capital} from './string_fun'    //conisder this is line is another filter
const cap=capital("hello!");
console.log(cap) ;                //"HELLO!"

//importing a default export
//While importing default built-in functions we should not use { }, like,
import substract from "math_functions";
//here substarct is built in we have not used { } for substarct


//export fallback with default export
export default function substarct(x,y) { return x-1};
//export, default and function all are keywords
