const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/services", (req, res) => {
  res.render("services.ejs", { title: "Services Page" });
});

app.get("/services/:service", (req, res) => {
  res.render("service-details.ejs", { title: "Service Details" });
});

app.get("/cases", (req, res) => {
  res.render("cases.ejs", { title: "Cases Page" });
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
