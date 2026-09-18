import express from "express";

const app = express();
app.set("view engine", "ejs");

const PORT = 3000;

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

import { join } from "path";

app.get("/", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "index.html"));
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
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

  const entries = [
    { title: "First Entry", body: "This is the first entry." },
    { title: "Second Entry", body: "This is the second entry." },
    { title: "Third Entry", body: "This is the third entry." },
  ];

  app.get("/entries", (req, res) => {
    res.render("entries", { title: "My Notes", entries });
  });

  app.get("/entries/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const entry = entries[id];

    if (!entry) {
      //res.status(404).render("error", { message: "Entry not found" });
      res.status(404).send("Entry not found");
      return;
    }

    res.render("entries", { title: entry.title, entry });
  });

  const events = [
    { title: "Career fair", date: "2026-09-13" },
    { title: "Hackathon kickoff", date: "2026-09-14" },
    { title: "Dancing with the stars", date: "2026-09-15" },
    { title: "Birthday party", date: "2026-09-16" },
  ];

  app.get("/events", (req, res) => {
    if (events.length === 0) {
      // res.status(404).render("error", { message: "No events found" });
      res.status(404).send("No events scheduled");
      return;
    }
    res.render("events", { events });
  });

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
