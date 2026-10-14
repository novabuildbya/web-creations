// FormSathi WhatsApp click-to-chat settings.
// Number format: India country code 91 + 10-digit WhatsApp number.
// Write digits only: no plus sign, spaces, brackets or hyphens.
const WHATSAPP_NUMBER_1 = "916391220862"; // Replace with your WhatsApp number
const WHATSAPP_NUMBER_2 = "917905573288"; // Replace with your friend's WhatsApp number

const starterMessage = "Hello FormSathi, mujhe ek online form bharwana hai. Form ka naam: ";

function setupWhatsAppButton(buttonId, phoneNumber) {
  const button = document.getElementById(buttonId);
  const validIndianNumber = /^91\d{10}$/.test(phoneNumber);

  if (validIndianNumber) {
    const encodedMessage = encodeURIComponent(starterMessage);
    button.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    button.setAttribute("aria-label", "WhatsApp par form request bhejein");
  } else {
    button.href = "#contact";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Pehle script.js file mein is button ka actual WhatsApp number add karein.");
    });
  }
}

setupWhatsAppButton("whatsapp1", WHATSAPP_NUMBER_1);
setupWhatsAppButton("whatsapp2", WHATSAPP_NUMBER_2);
document.getElementById("year").textContent = new Date().getFullYear();
