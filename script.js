
/* Apne WhatsApp numbers yahan daalo.
   Format: 91 ke baad 10 digit mobile number.
   Example: 919876543210
   +, spaces ya hyphen mat lagana.
*/

const WHATSAPP_NUMBER_1 = "916391220862";
const WHATSAPP_NUMBER_2 = "917905573288";

let currentLanguage = "hi";

const languageBtn = document.getElementById("languageBtn");

function changeLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  languageBtn.textContent = language === "hi" ? "English" : "हिंदी";
}

languageBtn.addEventListener("click", () => {
  changeLanguage(currentLanguage === "hi" ? "en" : "hi");
});

function isValidNumber(number) {
  return /^91\d{10}$/.test(number);
}

function whatsappUrl(number, service = "") {
  const message = service
    ? `Hello FormSathi, I need help with ${service}. Please tell me the process and total charges.`
    : "Hello FormSathi, I need help with an online form. Please tell me the process and total charges.";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function setupContactLink(id, number) {
  const link = document.getElementById(id);

  if (isValidNumber(number)) {
    link.href = whatsappUrl(number);
    link.classList.remove("disabled-link");
    link.removeAttribute("aria-disabled");
  } else {
    link.removeAttribute("href");
    link.classList.add("disabled-link");
    link.setAttribute("aria-disabled", "true");
  }

  link.addEventListener("click", (event) => {
    if (!isValidNumber(number)) {
      event.preventDefault();

      alert(
        currentLanguage === "hi"
          ? "Pehle script.js mein sahi WhatsApp number daalo."
          : "Please add a valid WhatsApp number in script.js first."
      );
    }
  });
}

setupContactLink("whatsapp1", WHATSAPP_NUMBER_1);
setupContactLink("whatsapp2", WHATSAPP_NUMBER_2);

document.querySelectorAll(".service-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!isValidNumber(WHATSAPP_NUMBER_1)) {
      alert(
        currentLanguage === "hi"
          ? "Pehle script.js mein pehla WhatsApp number daalo."
          : "Please add the first WhatsApp number in script.js first."
      );
      return;
    }

    const service = button.getAttribute("data-service");
    window.open(
      whatsappUrl(WHATSAPP_NUMBER_1, service),
      "_blank",
      "noopener,noreferrer"
    );
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

changeLanguage("hi");
