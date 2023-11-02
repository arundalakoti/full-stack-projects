var fs = require("fs");
var events = require("events");

//**********************2*************************
const aboutNodeJs =
  "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021.";

fs.writeFile("nodejs_architecture.txt", aboutNodeJs, function (err) {
  if (err) {
    return console.log("Error in writing to file: ", err);
  }

  console.log("Data written successfully");
  // console.log("Let's read newly written file");

  // fs.readFile("nodejs_architecture.txt", function (err, data) {
  //   if (err) {
  //     return console.log("Error in reading file: ", err);
  //   }

  //   console.log("Asynchronous read:", data.toString());
  // });
});

//**********************3*************************
fs.readFile("nodejs_architecture.txt", function (err, data) {
  if (err) {
    return console.log("Error in reading file: ", err);
  }

  console.log("Asynchronous read:", data.toString());
});

//**********************4*************************

const dataToAppend =
  "Node. js is a fast and scalable platform for developing web applications, used to build real-time apps, server-side, and networking applications. It is an open-source, cross-platform runtime environment that allows you to build scalable networked applications using JavaScript.";

fs.appendFile("nodejs_architecture.txt", dataToAppend, "utf8", function (err) {
  if (err) {
    return console.log("Error in appending content to file: ", err);
  }

  console.log("Data Appended successfully");

  fs.readFile("nodejs_architecture.txt", function (err, data) {
    if (err) {
      return console.log("Error in reading file: ", err);
    }
    console.log("Data after content is appended to data: ", data.toString());
  });
});

//**********************5*************************

fs.unlink("nodejs_architecture.txt", function (err) {
  if (err) {
    return console.log("Error in deleting file: ", err);
  }

  console.log("File Deleted SuccessFully");
});

//**********************6*************************

var os = require("os");

console.log("Operating System Name: ", os.type());

console.log("OS release: ", os.release());

// **********************7*************************

var http = require("http");

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer((req, res) => {
  res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!");

  res.end();
});

server.listen(PORT, HOST, function () {
  console.log("I'm listening at %s, on port %s", HOST, PORT);
});

// **********************8*************************

var em = new events.EventEmitter();

em.on("subscribe", function (data) {
  console.log("Thanks for subscribing to", data);
});

em.emit("subscribe", "College Wallah");

// **********************9*************************

var em = new events.EventEmitter();
function subscription(data) {
  console.log("Thanks for subscribing to", data);
}

em.on("subscribe", subscription);

em.emit("subscribe", "College Wallah");

em.removeListener("myEvent", subscription);

// em.off("myEvent", subscription);

em.emit("subscribe", "College Wallah");

// **********************10*************************

const defaultMaxListeners = em.getMaxListeners();
console.log(`Current default maximum listeners: ${defaultMaxListeners}`);

em.setMaxListeners(5);

const newMaxListeners = em.getMaxListeners();
console.log(`New maximum listeners: ${newMaxListeners}`);