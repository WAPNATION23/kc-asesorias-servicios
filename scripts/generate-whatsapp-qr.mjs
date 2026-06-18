import QRCode from "qrcode";

const WHATSAPP_URL = `https://wa.me/56978750692?text=${encodeURIComponent(
  "Hola, me interesa cotizar con K&C Asesorías y Servicios."
)}`;

await QRCode.toFile("public/whatsapp-qr.png", WHATSAPP_URL, {
  width: 520,
  margin: 2,
  color: {
    dark: "#0B2D5B",
    light: "#FFFFFF",
  },
});

console.log("QR generated for:", WHATSAPP_URL);
