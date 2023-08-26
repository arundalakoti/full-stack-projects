// *****************************************************************************************************************************
// 1. Double using callback.
// *****************************************************************************************************************************

function doubbleFunction(arr, double) {
  return double(arr);
}

function double(arr) {
  arr.map((val, index) => (arr[index] *= 2));
  return arr;
}

console.log(doubbleFunction([1, 2, 3, 4, 5, 6, 7, 8], double));

// *****************************************************************************************************************************
// 2. String Manipulation.
// *****************************************************************************************************************************

function logString(str1) {
  console.log(`The manipulated string is: ${str1}`);
}

function manipulateString(str, logString) {
  const str1 = str.toUpperCase();

  return logString(str1);
}

manipulateString("hello world!!", logString);

// *****************************************************************************************************************************
// 3. Age in Days.
// *****************************************************************************************************************************

function logPerson(fullName, ageInDays) {
  console.log(
    `The person's fullname is ${fullName} and their age in days is ${ageInDays}.`
  );
}

function ageInDays({ firstName, lastName, age }, logPerson) {
  const fullName = firstName + " " + lastName;
  const ageInDays = age * 365;

  return logPerson(fullName, ageInDays);
}

const person = { firstName: "Sumit", lastName: "Joshi", age: 21 };

ageInDays(person, logPerson);

// *****************************************************************************************************************************
// 4. Arrange in alphabetical order.
// *****************************************************************************************************************************

const arr = [
  { title: "Harry Potter", author: "J K Rowling", year: 2010 },
  {
    title: "An Introduction to Dreamland",
    author: "Bankim Chandra Chatterjee",
    year: 2013,
  },
  { title: "Anand Math", author: "xyz", year: 2014 },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 2015 },
  { title: "Harry Potter", author: "J K Rowling", year: 2016 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 2017 },
];

function callbackList(newArr) {
  console.log(newArr.sort());
}

function formNewList(arr, callbackList) {
  let newArr = [];

  arr.map((val) => {
    newArr.push(val.title);
  });

  return callbackList(newArr);
}

formNewList(arr, callbackList);

// *****************************************************************************************************************************
// 5. Greeting Promise.
// *****************************************************************************************************************************

// function greetPromise(name) {
//   console.log(`Hello, ${name}`);
//   resolve("done");
// }

// function greetUser(name, greetPromise) {
//    greetPromise(name)
//     .then((val) => {
//       console.log("Promise Successful",val);
//     })
//     .catch((e) => {
//       console.log("Error: ", e);
//     });
// }

// greetUser("Sumit",greetPromise);

// *****************************************************************************************************************************
// 6. Fetch results asynchronously.
// *****************************************************************************************************************************

async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("6", data);
    });
}

fetchData();

// *****************************************************************************************************************************
// 7. Multiple requests.
// *****************************************************************************************************************************

async function fetchData() {
  let toDoTasks;
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      toDoTasks = data;
    });

  let postDetails;
  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      postDetails = data;
    });

  const finalObj = {
    todo: toDoTasks,
    post: postDetails,
  };

  console.log("7", finalObj);
}

// *****************************************************************************************************************************
// 8. Get Data from API and Display it on the browser console.
// *****************************************************************************************************************************

async function fetchNewData() {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log("8", data));
}

fetchNewData();

// *****************************************************************************************************************************
// 9. Error Handling
// *****************************************************************************************************************************

async function errorHandling() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/123456789";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw ("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("There was a problem with the fetch operation:", error);
    });
}

errorHandling();
