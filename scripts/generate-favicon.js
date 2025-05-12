const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicon() {
  const inputFile = path.join(__dirname, "../public/polkadot.png");
  const outputFile = path.join(__dirname, "../public/favicon.png");

  try {
    // Create a 32x32 version of the logo
    await sharp(inputFile).resize(32, 32).toFile(outputFile);

    console.log("Favicon generated successfully!");
  } catch (error) {
    console.error("Error generating favicon:", error);
  }
}

generateFavicon();
