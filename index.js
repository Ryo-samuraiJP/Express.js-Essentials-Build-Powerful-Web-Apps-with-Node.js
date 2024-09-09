import express, { response } from "express"; 
// import data from "./data/mock.json";
import data from "./data/mock.json" assert { type: "json" };

const app = express(); 

const PORT = 3000;

// Using the public folder at the root of project
app.use(express.static("public"));

// Using the images folder at the route / project
app.use('/images', express.static("images"));

// Using express.json and express.urlencoded
// app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// GET
app.get('/', (request, response) => {
  response.json(data);
});

// POST - express.json and express.urlencoded
app.post('/item', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

// GET - download method
app.get('/download', (request, response) => {
  response.download("images/mountains_2.jpeg");
});

// GET - redirect method
app.get('/redirect', (request, response) => {
  response.redirect("https://www.linkedin.com");
});

// GET with next()
app.get('/next', (request, response, next) => {
  console.log("The response will be sent by the next function."); 
  next();
}, (request, response) => {
  response.send("I just set up a route wtih a second callback.");
});

// GET with Routing Parameters
app.get('/class/:id', (request, response) => {
  const studentId = Number(request.params.id);
  const student = data.filter((student) => student.id === studentId);
  response.send(student);
});

app
  .route('/class')
  .get((request, response) => {
    response.send("Retrieve class info");
  })
  .post((request, response) => {
    response.send("Create class info");
  })
  .put((request, response) => {
    response.send("Update class info");
  });

// Route chaining
// GET
// app.get('/class', (request, response) => {
//   response.send("Retrieve class info");
// });


// POST
// app.post('/create', (request, response) => {
//   response.send("Create class info");
// });

// PUT
// app.put('/edit', (request, response) => {
//   response.send("Update class info");
// });

// DELETE
app.delete('/delete', (request, response) => {
  response.send("Delete class info");
});


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});