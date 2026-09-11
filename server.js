//updated unit 2 code
import express from "express";
import pagesRouter from "./routes/pages.js";
import apiRouter from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 3000;

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

app.use("/", pagesRouter);
app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above
  const filteredProjects = projects.filter((projects) => project.tag === tag);
  res.send(filteredProjects);
});

app.get("/projects/:tag", (req, res) => {
  const tag = req.params.tag;
  const filteredProjects = projects.filter((projects) => project.tag === tag);
  res.send(filteredProjects);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// import express from "express";

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, web!");
// });

// app.get("/about", (req, res) => {
//   res.send("ABOUT Attempt!!");
// });

// app.get("/about-me", (req, res) => {
//   res.send("about ME page");
// });

// app.get("/contact", (req, res) => {
//   res.send("contacts page");
// });

// // unit 2 exercise
// // GET /hello/:name responds with Hello, <name>! using a URL parameter
// app.get("/hello/:name", (req, res) => {
//   res.send(`Hello, ${req.params.name}!`);
// });

// app.get("/repeat/:word", (req, res) => {
//   const word = req.params.word;
//   res.send(`${word} ${word} ${word}`);
// });

// app.get("/count", (req, res) => {
//   const from = req.query.from || "1";
//   const to = req.query.to || "10";
//   res.send(`Counting from ${from} to ${to}`);
// });

// app.get("/api/info", (req, res) => {
//   res.json({ name: "Akhila", id: "12345:" });
// });

// app.get("/api/error", (req, res) => {
//   res.status(400).send("Bad request");
// });

// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// });
