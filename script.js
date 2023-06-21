console.log(123);
let a="string";
console.log(a);
let b=100;
console.log(a);
 // data type
    //number= integer,infinity,-infi,NaN

let c ="hutd"/0;
console.log(c);
//bigint
let d=10n;
console.log(d,typeof d);
//string
let str1="abcdefgh";
let str2="efghijkl";
let num1=10;
let num2=20;
console.log(`addtion of two number is ${num1} and ${num2} are ${num1+num2}`);
//null
//undefined
let xtr;
console.log(xtr);
//boolean
const boo1= true;
console.log(sece);
var sece= 'college';

//symbol
//object= hold collection of data
const bharath =  Object.freeze({
    name: "bharathan",
    age : 20,
    phNo: 6382904280,
    email:"www.xyz@gmail.com",
});

//dynamical input ( obj.key = value ) insert and updating
bharath.school ="GOVT SCHOOL";
bharath.age= 21;
console.log(bharath);
//delete
delete bharath.phNo;
console.log(bharath);

// only keys
 const bharath =  Object.keys({
     name: "bharathan",
     age : 20,
     phNo: 6382904280,
     email:"www.xyz@gmail.com",
 });
 console.log(bharath);
 only values
 const bharath =  Object.values({
    name: "bharathan",
    age : 20,
    phNo: 6382904280,
    email:"www.xyz@gmail.com",
});
console.log(bharath);

//mutation
 const userx={
    name:'x',
    age:30,
 };
const usery = userx;
usery.age =40;
console.log(userx,usery);
spred operator synatx= {. . . } fro cloning
const userx={
     name:'x',
     age:30,
  };
 const usery = {...userx};
 usery.age =40;
 console.log(userx,usery);
const details = {
      address:{
          street: 'second stree',
          city : 'coimbatore',
      }
// city: 'coimabtore' // error
}
for( const key in details){
    console.log(key,details[key]);
}
//console.log(details.address.city); // error
console.log(details?.address?.city); // optional operator= ? 
console.log(details.name);
function 
function sum(num1, num2){
    return num1*num2;
}
console.log(sum(10,10));

function invalid(n1,n2){
     if(typeof n1 !== 'number' || typeof n2!=='number')
     return 'invalid number';
}
console.log(invalid('eifb',12));
// differcence between == and ===
//    ==  compare value 
//    === compare value + datatype


//arrow
const add=(nu1,nu2) => { return nu1 + nu2 }
console.log(add(12,11));

//imidetate invoke fun

(function mul(nn1,nn2){
    console.log( nn1*nn2);
})(100,10);

//anonymous fun
//1 fun have another fun as parameter or return an another fun value is called higher order fun
const ad =(number1,number2)=>number1+number2;
const calc =(number1,number2,operation)=>{ return operation(number1,number2)};
console.log(calc(10,11,ad));

let str= "    iam studying at sece";
console.log(str.trim());
console.log(str.replace('i','O'));

//Array
 let arr=[1,2,3,"abcd"];
 console.log(arr);
 arr.push(123);
 console.log(arr);
 console.log(arr.pop());

 arr.push(((num11)=> num11*5)(10));
 console.log(arr);
 console.log(arr[4]);

 for(const key in arr){
    console.log(key,arr[key]);
 }
 slice
let names=['bharathan','arjun','dhivyan','dhiyanesh'];
//console.log(names.slice(0,2)); // slice(start,end);
console.log(names);
//console.log(names.shift());
console.log(names.unshift("bharathan"));

//splice
//console.log(names.splice(2,2,)); //splice(start,delete_count,attributes)
names.splice(names.length,0,"dinesh","deepak");
console.log(names);
let name1=['a','b','c','d','e','f'];
console.log(name1.slice(1,4));
console.log(name1.splice(1,4));

String
let str= "Bharathan";
//slice
console.log(str.slice(1,5));
let str1="iam a software developer";
//split
console.log(str1.split(" "));// string to array
//join
let str2=[1,2,3,"bharathan","arjunan"];
console.log(str2.join("")); // array to string
//charAt
console.log(str.charAt(3));
//toUpperCase
console.log(str.toUpperCase());
//toLowerCase
console.log(str.toLowerCase());

let string1="bharathan arjunan dhivyan dhiyanesh dinesh deepak";
let named_sliced= string1.split(" ");
let ans=[];
for(let i=0; i<string1.length; i++){
    let result[]=result.push( named_sliced[i].charAt(0).toUpperCase()+ named_sliced[i].slice(1));
    ans.push(result);
}
