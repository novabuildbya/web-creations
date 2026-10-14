
/*
  Replace these two placeholders with your real WhatsApp numbers.
  Format: country code + 10-digit mobile number.
  Example format: 919876543210
  Do not include +, spaces, or hyphens.
*/

const WHATSAPP_NUMBER_1 = "916391220862";
const WHATSAPP_NUMBER_2 = "917905573288";

let currentLanguage = "en";

const languageBtn = document.getElementById("languageBtn");

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    const content = element.dataset[language];

    // Allow intentional span markup in the two styled headings.
    if (content.includes("<span>")) {
      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  });

  languageBtn.textContent = language === "en" ? "हिंदी" : "English";
  languageBtn.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Hindi" : "Switch to English"
  );
}

languageBtn.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "hi" : "en");
});

function createWhatsAppLink(number, service = "") {
  const message = service
    ? `Hello FormSathi, I need help with: ${service}. Please explain the process and total charges.`
    : "Hello FormSathi, I need help with an online form. Please explain the process and charges.";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function setupWhatsAppLinks() {
  const link1 = document.getElementById("whatsapp1");
  const link2 = document.getElementById("whatsapp2");

  link1.href = createWhatsAppLink(WHATSAPP_NUMBER_1);
  link2.href = createWhatsAppLink(WHATSAPP_NUMBER_2);

  // Hide links until valid numbers are entered.
  const validNumber = (number) => /^91\d{10}$/.test(number);

  if (!validNumber(WHATSAPP_NUMBER_1)) {
    link1.removeAttribute("href");
    link1.classList.add("disabled-link");
    link1.title = "Add the first WhatsApp number in script.js";
  }

  if (!validNumber(WHATSAPP_NUMBER_2)) {
    link2.removeAttribute("href");
    link2.classList.add("disabled-link");
    link2.title = "Add the second WhatsApp number in script.js";
  }
}

document.querySelectorAll(".choose-service").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    const message = createWhatsAppLink(WHATSAPP_NUMBER_1, service);
    const validNumber = /^91\d{10}$/.test(WHATSAPP_NUMBER_1);

    if (!validNumber) {
      alert(
        currentLanguage === "en"
          ? "Please add your WhatsApp number in script.js first."
          : "पहले script.js में अपना WhatsApp नंबर डालें।"
      );
      return;
    }

    window.open(message, "_blank", "noopener,noreferrer");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

setupWhatsAppLinks();
setLanguage("en");
