const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const services = require("./data/services");
const cases = require("./data/cases");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

const partialPath = path.join(__dirname, "views", "partials", "header.ejs");
if (fs.existsSync(partialPath)) {
  console.log("Partial file exists");
} else {
  console.error("Partial file does not exist");
}

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/services", (req, res) => {
  res.render("services.ejs", { title: "Services Page" });
});

app.get("/services/:service", (req, res) => {
  const serviceName = req.params.service;
  const service = services[serviceName];
  res.render("service-details.ejs", { title: "Service Details", service });
});

app.get("/cases", (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const queryParams = new URLSearchParams(url.search);

  const category = queryParams.get("category");
  let filteredCases = [];
  console.log("category", category);

  if (category !== "all") {
    filteredCases = cases.filter((item) =>
      item?.categories?.includes(category)
    );
  } else {
    filteredCases = cases;
  }

  console.log("filteredCases", filteredCases);

  res.render("cases.ejs", {
    title: "Cases Page",
    cases,
    activeCategory: category || "all",
  });
});

app.get("/all-cases", (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const queryParams = new URLSearchParams(url.search);

  const category = queryParams.get("category");
  let filteredCases = [];
  console.log("category", category);

  if (category !== "all") {
    filteredCases = cases.filter((item) =>
      item?.categories?.includes(category)
    );
  } else {
    filteredCases = cases;
  }

  console.log("filteredCases", filteredCases);

  res.json({ cases: filteredCases, activeCategory: category });
});

app.get("/cases/:case", (req, res) => {
  res.render("case-details.ejs", { title: "Case Details" });
});

app.get("/schedule-consult", (req, res) => {
  res.render("schedule-consult.ejs", { title: "Schedule Consult" });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { title: "Contact Us" });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { title: "About Us" });
});

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Home Page" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
