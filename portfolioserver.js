import express from "express";

const app = express();
const PORT = 3000;

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/about", (req, res) => {
  res.send("ABOUT Attempt!!");
});

app.get("/about-me", (req, res) => {
  res.send("about ME page");
});

app.get("/contact", (req, res) => {
  res.send("contacts page");
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag;
  const filteredProjects = projects.filter((project) => project.tag === tag);
  if (!tag) {
    res.send(projects);
  } else if (filteredProjects.length === 0) {
    res.status(404).send("No projects found with that tag.");
  } else {
    res.send(filteredProjects);
  }

  // if (tag) {
  //   const filteredProjects = projects.filter((project) => project.tag === tag);
  //   res.send(filteredProjects);
  // } else {
  //   res.send(projects);
  // }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
