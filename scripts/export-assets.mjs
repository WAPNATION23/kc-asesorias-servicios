import sharp from "sharp";

await sharp("public/pdf-pages/page-1.png")
  .extract({ left: 420, top: 70, width: 1080, height: 860 })
  .png()
  .toFile("public/logo-kc.png");

console.log("Assets exported");
