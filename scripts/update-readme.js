const fs = require("fs");

const launchDate = new Date("2024-12-19"); // Change this to your portfolio launch date
const today = new Date();

const diffTime = today - launchDate;
const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const years = Math.floor(totalDays / 365);
const days = totalDays % 365;

const updated = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});


const replacement = ` 
**${years} year${years !== 1 ? "s" : ""}, ${days} day${days !== 1 ? "s" : ""}**:
`;

const readme = fs.readFileSync("README.md", "utf8");

const newReadme = readme.replace(
    /<!-- PORTFOLIO_AGE_START -->[\s\S]*<!-- PORTFOLIO_AGE_END -->/,
    `<!-- PORTFOLIO_AGE_START -->\n${replacement}\n<!-- PORTFOLIO_AGE_END -->`
);

fs.writeFileSync("README.md", newReadme);

console.log("README updated.");
