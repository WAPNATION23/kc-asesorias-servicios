import { execSync } from "node:child_process";
import fs from "node:fs";

process.env.GITHUB_PAGES = "true";

execSync("npm run build", { stdio: "inherit" });

fs.writeFileSync("out/.nojekyll", "");
console.log("Ensured out/.nojekyll exists");
