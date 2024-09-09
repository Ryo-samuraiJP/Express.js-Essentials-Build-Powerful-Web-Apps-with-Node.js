import express, { response } from "express"; 
// import data from "./data/mock.json";
import data from "./data/mock.json" assert { type: "json" };

const app = express(); 

const PORT = 3000;

// GET
app.get('/', (request, response) => {
  response.json(data);
});

// POST
app.post('/create', (request, response) => {
  response.send("This is a POST request at /");
});

// PUT
app.put('/edit', (request, response) => {
  response.send("This is a PUT request at /");
});

// DELETE
app.delete('/delete', (request, response) => {
  response.send("This is a DELETE request at /");
});


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
  console.log(data);
});