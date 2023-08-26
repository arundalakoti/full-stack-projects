// // let obj1 = {
// //   name: "arun",
// //   age: 21,
// //   color: "red",
// // };

// // let obj2 = {
// //   // color: "blue",
// // };

// // let obj = Object.assign({}, obj1, obj2);
// // console.log(obj);

// let names = {
//   firstName: "arun",
//   lastName: "dalakoti",
// };

// let printFullName = function (hometown, state) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       " from " +
//       hometown +
//       " , " +
//       state
//   );
// };

// let name2 = {
//   firstName: "Sachin",
//   lastName: "Tendulkar",
// };

// //the first argument will be object's "this"
// printFullName.call(names, "Dehradun", "Uttarakhand");

// //function borrowing => If we have a function common to both the objects then one way is to copy the same function to both the objects but this will form repeated code. Other solutions=>
// //1)- to have that function inside of one object only and then use either of call, apply or bind with the first argument as the object name to which we want it to call.
// //2)- copy that function outside of the object and make it as a function and the use it as follows=>
// printFullName.call(name2, "Mumbai", "Maharastra");

// //same as call except the arguments are passed as array
// printFullName.apply(name2, ["Mumbai", "Maharastra"]);

// //The bind() method creates a new function that, when called,
// //has its this keyword set to the provided value, with a given sequence
// //of arguments preceding any provided when the new function is called.
// let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra"); //returns a function
// console.log(printMyName);
// printMyName();

// let cartType = "";
// console.log(cartType.toLowerCase());
// cartType = cartType.toLowerCase();

// console.log(cartType);
