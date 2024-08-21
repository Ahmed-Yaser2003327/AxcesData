// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello");
// });
// app.listen(3004, () => {
//   console.log("server on 3004");
// });
// const http = require("http"); // Loads the http module
// http
//   .createServer((request, response) => {
//     // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
//     response.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     // 2. Write the announced text to the body of the page
//     response.write("Hello, World!\n");
//     // 3. Tell the server that all of the response headers and body have been sent
//     response.end();
//   })
//   .listen(1337);
// const os = require("os");
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.type());
const pi = require("./index");
console.log(pi.myName());
