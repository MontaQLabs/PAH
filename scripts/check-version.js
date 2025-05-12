const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Check Node.js version and downgrade Next.js if needed
const nodeVersion = process.version;
console.log(`Node version detected: ${nodeVersion}`);

// If Node.js version is less than 18.18.0, downgrade Next.js
if (nodeVersion.startsWith("v18.17.")) {
  console.log(
    "Node.js version is 18.17.x, downgrading Next.js to a compatible version"
  );

  // Read current package.json
  const packageJsonPath = path.join(__dirname, "..", "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Backup the original next version before modifying
  const originalNextVersion = packageJson.dependencies.next;
  console.log(`Original Next.js version: ${originalNextVersion}`);

  // Update Next.js to a compatible version
  packageJson.dependencies.next = "14.0.4";
  console.log(`Downgrading Next.js to: 14.0.4`);

  // Update eslint-config-next to match
  if (packageJson.devDependencies["eslint-config-next"]) {
    packageJson.devDependencies["eslint-config-next"] = "14.0.4";
    console.log(`Downgrading eslint-config-next to: 14.0.4`);
  }

  // Write the modified package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Reinstall dependencies with the updated package.json
  try {
    console.log("Reinstalling dependencies with the updated package.json...");
    execSync("npm install --no-save", { stdio: "inherit" });
    console.log("Dependencies reinstalled successfully!");
  } catch (error) {
    console.error("Error reinstalling dependencies:", error);
    process.exit(1);
  }
} else {
  console.log("Node.js version is compatible with your Next.js version.");
}
