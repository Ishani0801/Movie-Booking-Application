// const routeResponseMap = {
//     "/movies": "All Movies Data in JSON format from Mongo DB",
//     "/genres": "All Genres Data in JSON format from Mongo DB",
//     "/artists": "All Artists Data in JSON format from Mongo DB"
// };
// const port = 3000;

// http = require("http");
// httpStatus = require("http-status-codes");

// app = http.createServer((req, res) => {
//     console.log(req.url)

//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     });

//     if (routeResponseMap[req.url]) {
//         res.end(routeResponseMap[req.url]);
//     }
//     else {
//         res.end("<h1>Check your URL!</h1>");
//     }
// });

// app.listen(port);


// const db = require("./models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

//core imports
const http = require("http");
//local imports
const app = require("./app");

//constants
const PORT = process.env.PORT || 8085;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 server listening on port ${PORT}`);
});