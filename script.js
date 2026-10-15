/* ===== FormSathi settings – edit these ===== */
// PLACEHOLDER: replace with your real WhatsApp number (country code + number, digits only, no + or spaces)
const WHATSAPP_NUMBER = "916391220862";

// Job listings. Add ONLY verified information. Leave the list empty [] to show the empty message.
// Copy this template for each job (remove the leading // ):
// { title:"", org:"", qualification:"", age:"", vacancies:"", startDate:"", lastDate:"",
//   fee:"", selection:"", notificationUrl:"", applyUrl:"", updated:"" }
const JOBS = [];

/* ===== Translations ===== */
const T = {
en:{skip:"Skip to content",nav_home:"Home",nav_services:"Services",nav_jobs:"Latest Jobs",nav_how:"How It Works",nav_about:"About",nav_contact:"Contact",
hero_h1:"Online Forms, Made Simple.",hero_p:"FormSathi helps you understand and complete online applications for jobs, scholarships and exams with clear guidance and personal assistance.",hero_cta1:"Explore Services",hero_cta2:"Contact on WhatsApp",hero_note:"Independent assistance service. Not a government website.",
v_title:"Your application, step by step",v1:"Choose the form",v2:"Keep documents ready",v3:"Review every detail yourself",v4:"Submit on the official website",v_price:"Assistance starts at. Official fees are separate.",
s_title:"Services",s_sub:"Pick what you need. We guide you through it.",
s1:"Government Job Application Assistance",s1d:"Help understanding eligibility and filling job application forms correctly.",
s2:"Scholarship Form Assistance",s2d:"Guidance on scholarship forms and the documents they usually need.",
s3:"Competitive Exam Registration",s3d:"Support with exam registration, photo and signature requirements.",
s4:"College Admission Forms",s4d:"Help with admission and entrance application forms.",
s5:"Document and Form Guidance",s5d:"Understand what a form asks for and how to prepare your documents.",
s6:"Other Online Application Assistance",s6d:"Another online form? Tell us what it is and we will tell you if we can help.",
s_price:"Assistance from ₹50",s_price_ask:"Price shared before work begins",s_cta:"Ask on WhatsApp",
j_title:"Latest Jobs and Updates",j_sub:"Always confirm details on the official notification before applying.",
j_empty:"No verified listings right now. Message us on WhatsApp and we will help you find the official notification for the form you need.",
jl_qual:"Qualification",jl_age:"Age limit",jl_vac:"Vacancies",jl_dates:"Dates",jl_fee:"Official fee",jl_sel:"Selection",jl_notif:"Official notification",jl_apply:"Official apply link",jl_upd:"Updated on",
h_title:"How It Works",h1t:"Choose the service you need",h1d:"Select the type of form from our services.",h2t:"Contact FormSathi",h2d:"Message us on WhatsApp and tell us which form you need help with.",h3t:"Review and complete safely",h3d:"Check all your details yourself before the final submission on the official website.",
p_title:"Transparent Pricing",p1:"Basic assistance starts at ₹50.",p2:"Official application fees are separate and paid by you on the official website.",p3:"Any additional charge is told to you before work begins.",p4:"No hidden charges.",
w_title:"Why Choose FormSathi",w1t:"Clear guidance",w1d:"Plain explanations of what each form needs.",w2t:"Transparent pricing",w2d:"You know the cost before we start.",w3t:"Student-friendly",w3d:"Simple, patient help for first-time applicants.",w4t:"Hindi and English",w4d:"Get help in the language you are comfortable with.",w5t:"Privacy-conscious",w5d:"We never ask for passwords, OTPs or PINs.",
a_title:"About the Founder",a_quote:"Built with a simple goal: making online applications easier for everyone.",
f_title:"Frequently Asked Questions",
q1:"What is FormSathi?",a1:"FormSathi is an independent service that helps people understand and complete online application forms. We are not a government website.",
q2:"How much does the assistance cost?",a2:"Basic assistance starts at ₹50. If a form needs more work, we tell you the price before we begin.",
q3:"Are government application fees included?",a3:"No. Official application fees are separate and are paid by you directly on the official website.",
q4:"Can I get help in Hindi?",a4:"Yes. FormSathi supports both Hindi and English.",
q5:"Does FormSathi guarantee selection?",a5:"No. We help with the form only. Selection, scholarships and results depend entirely on the official authority.",
q6:"How is my personal information handled?",a6:"We ask only for what a form needs. We never ask for passwords, OTPs, UPI PINs, bank PINs or payment credentials.",
q7:"How can I apply directly through the official website?",a7:"Open the official notification of the job or exam and use the official apply link given there. You can always apply yourself without our help.",
c_title:"Need help with a form?",c_p:"Message us on WhatsApp with the name of the form.",c_btn:"Contact on WhatsApp",c_note:"Never share your passwords, OTPs or PINs with anyone, including us.",
l1t:"Privacy Policy",l1:"We collect only the details needed to help with your form. We do not ask for or store passwords, OTPs, UPI PINs, bank PINs or payment credentials. Please do not send sensitive documents unless the form genuinely requires them. This is a plain-language summary, not a legal certification.",
l2t:"Terms and Conditions",l2:"FormSathi provides assistance only. You are responsible for checking all details before final submission. Official fees are separate. We do not guarantee selection, admission, scholarship or any result.",
l3t:"Disclaimer",l3:"FormSathi is an independent assistance service. It is not an official government website and is not affiliated with any government body. Always verify every application and notification on the relevant official website.",
foot_disc:"Independent assistance service. Not affiliated with any government body.",
wa_hi:"Hello FormSathi, I need help with: ",wa_gen:"Hello FormSathi, I need help with an online form.",toggle:"हिंदी"},
hi:{skip:"मुख्य सामग्री पर जाएँ",nav_home:"होम",nav_services:"सेवाएँ",nav_jobs:"नई भर्तियाँ",nav_how:"कैसे काम करता है",nav_about:"परिचय",nav_contact:"संपर्क",
hero_h1:"ऑनलाइन फॉर्म भरना, अब आसान।",hero_p:"FormSathi नौकरी, स्कॉलरशिप और परीक्षा के ऑनलाइन आवेदन समझने और भरने में साफ़ मार्गदर्शन और व्यक्तिगत सहायता के साथ आपकी मदद करता है।",hero_cta1:"सेवाएँ देखें",hero_cta2:"WhatsApp पर संपर्क करें",hero_note:"यह एक स्वतंत्र सहायता सेवा है। सरकारी वेबसाइट नहीं।",
v_title:"आपका आवेदन, कदम दर कदम",v1:"फॉर्म चुनें",v2:"दस्तावेज़ तैयार रखें",v3:"हर जानकारी खुद जाँचें",v4:"आधिकारिक वेबसाइट पर जमा करें",v_price:"से सहायता शुरू। आधिकारिक शुल्क अलग है।",
s_title:"सेवाएँ",s_sub:"अपनी ज़रूरत चुनें। बाकी हम समझाएँगे।",
s1:"सरकारी नौकरी आवेदन सहायता",s1d:"पात्रता समझने और नौकरी के आवेदन फॉर्म सही तरह भरने में मदद।",
s2:"स्कॉलरशिप फॉर्म सहायता",s2d:"स्कॉलरशिप फॉर्म और उनमें लगने वाले दस्तावेज़ों की जानकारी।",
s3:"प्रतियोगी परीक्षा रजिस्ट्रेशन",s3d:"परीक्षा रजिस्ट्रेशन, फोटो और हस्ताक्षर की ज़रूरतों में सहायता।",
s4:"कॉलेज एडमिशन फॉर्म",s4d:"एडमिशन और प्रवेश परीक्षा के आवेदन फॉर्म में मदद।",
s5:"दस्तावेज़ और फॉर्म मार्गदर्शन",s5d:"फॉर्म में क्या माँगा गया है और दस्तावेज़ कैसे तैयार करें, यह समझें।",
s6:"अन्य ऑनलाइन आवेदन सहायता",s6d:"कोई और ऑनलाइन फॉर्म? हमें बताइए, हम बताएँगे कि मदद कर सकते हैं या नहीं।",
s_price:"₹50 से सहायता शुरू",s_price_ask:"काम शुरू होने से पहले कीमत बताई जाएगी",s_cta:"WhatsApp पर पूछें",
j_title:"नई भर्तियाँ और अपडेट",j_sub:"आवेदन से पहले आधिकारिक अधिसूचना में जानकारी ज़रूर जाँचें।",
j_empty:"अभी कोई सत्यापित भर्ती सूचीबद्ध नहीं है। WhatsApp पर संदेश भेजें, हम आपके फॉर्म की आधिकारिक अधिसूचना खोजने में मदद करेंगे।",
jl_qual:"योग्यता",jl_age:"आयु सीमा",jl_vac:"पद",jl_dates:"तिथियाँ",jl_fee:"आधिकारिक शुल्क",jl_sel:"चयन प्रक्रिया",jl_notif:"आधिकारिक अधिसूचना",jl_apply:"आधिकारिक आवेदन लिंक",jl_upd:"अपडेट की तारीख",
h_title:"कैसे काम करता है",h1t:"अपनी ज़रूरत की सेवा चुनें",h1d:"हमारी सेवाओं में से फॉर्म का प्रकार चुनें।",h2t:"FormSathi से संपर्क करें",h2d:"WhatsApp पर संदेश भेजें और बताएँ कि किस फॉर्म में मदद चाहिए।",h3t:"जाँचें और सुरक्षित तरीके से पूरा करें",h3d:"आधिकारिक वेबसाइट पर अंतिम जमा करने से पहले अपनी सारी जानकारी खुद जाँचें।",
p_title:"पारदर्शी कीमत",p1:"बुनियादी सहायता ₹50 से शुरू होती है।",p2:"आधिकारिक आवेदन शुल्क अलग है और आप उसे आधिकारिक वेबसाइट पर खुद भरते हैं।",p3:"कोई अतिरिक्त शुल्क हो तो काम शुरू होने से पहले बताया जाएगा।",p4:"कोई छिपा शुल्क नहीं।",
w_title:"FormSathi क्यों चुनें",w1t:"साफ़ मार्गदर्शन",w1d:"हर फॉर्म में क्या चाहिए, सरल भाषा में।",w2t:"पारदर्शी कीमत",w2d:"शुरू करने से पहले आपको खर्च पता होता है।",w3t:"विद्यार्थियों के अनुकूल",w3d:"पहली बार आवेदन करने वालों के लिए सरल और धैर्यपूर्ण मदद।",w4t:"हिंदी और अंग्रेज़ी",w4d:"जिस भाषा में सहज हों, उसमें सहायता लें।",w5t:"गोपनीयता का ध्यान",w5d:"हम पासवर्ड, OTP या PIN कभी नहीं माँगते।",
a_title:"संस्थापक के बारे में",a_quote:"एक सरल उद्देश्य के साथ बनाया गया: ऑनलाइन आवेदन को सबके लिए आसान बनाना।",
f_title:"अक्सर पूछे जाने वाले प्रश्न",
q1:"FormSathi क्या है?",a1:"FormSathi एक स्वतंत्र सेवा है जो लोगों को ऑनलाइन आवेदन फॉर्म समझने और भरने में मदद करती है। यह सरकारी वेबसाइट नहीं है।",
q2:"सहायता का शुल्क कितना है?",a2:"बुनियादी सहायता ₹50 से शुरू होती है। अगर किसी फॉर्म में ज़्यादा काम हो, तो शुरू करने से पहले कीमत बता दी जाती है।",
q3:"क्या सरकारी आवेदन शुल्क शामिल है?",a3:"नहीं। आधिकारिक आवेदन शुल्क अलग है और आप उसे सीधे आधिकारिक वेबसाइट पर भरते हैं।",
q4:"क्या मुझे हिंदी में मदद मिल सकती है?",a4:"हाँ। FormSathi हिंदी और अंग्रेज़ी दोनों में सहायता देता है।",
q5:"क्या FormSathi चयन की गारंटी देता है?",a5:"नहीं। हम सिर्फ फॉर्म भरने में मदद करते हैं। चयन, स्कॉलरशिप और परिणाम पूरी तरह आधिकारिक संस्था पर निर्भर हैं।",
q6:"मेरी व्यक्तिगत जानकारी का क्या होता है?",a6:"हम सिर्फ वही जानकारी माँगते हैं जो फॉर्म के लिए ज़रूरी है। हम पासवर्ड, OTP, UPI PIN, बैंक PIN या भुगतान की गोपनीय जानकारी कभी नहीं माँगते।",
q7:"आधिकारिक वेबसाइट से सीधे आवेदन कैसे करूँ?",a7:"नौकरी या परीक्षा की आधिकारिक अधिसूचना खोलें और उसमें दिए आधिकारिक आवेदन लिंक का उपयोग करें। आप हमारी मदद के बिना भी खुद आवेदन कर सकते हैं।",
c_title:"फॉर्म भरने में मदद चाहिए?",c_p:"फॉर्म का नाम लिखकर WhatsApp पर संदेश भेजें।",c_btn:"WhatsApp पर संपर्क करें",c_note:"अपना पासवर्ड, OTP या PIN किसी को न बताएँ, हमें भी नहीं।",
l1t:"गोपनीयता नीति",l1:"हम सिर्फ वही जानकारी लेते हैं जो आपके फॉर्म में मदद के लिए ज़रूरी है। हम पासवर्ड, OTP, UPI PIN, बैंक PIN या भुगतान की गोपनीय जानकारी न माँगते हैं, न रखते हैं। जब तक फॉर्म को सच में ज़रूरत न हो, संवेदनशील दस्तावेज़ न भेजें। यह सरल भाषा में सारांश है, कानूनी प्रमाणन नहीं।",
l2t:"नियम और शर्तें",l2:"FormSathi सिर्फ सहायता देता है। अंतिम जमा करने से पहले सारी जानकारी जाँचने की ज़िम्मेदारी आपकी है। आधिकारिक शुल्क अलग है। हम चयन, एडमिशन, स्कॉलरशिप या किसी भी परिणाम की गारंटी नहीं देते।",
l3t:"अस्वीकरण",l3:"FormSathi एक स्वतंत्र सहायता सेवा है। यह कोई आधिकारिक सरकारी वेबसाइट नहीं है और किसी सरकारी संस्था से संबद्ध नहीं है। हर आवेदन और अधिसूचना को संबंधित आधिकारिक वेबसाइट पर ज़रूर सत्यापित करें।",
foot_disc:"स्वतंत्र सहायता सेवा। किसी सरकारी संस्था से संबद्ध नहीं।",
wa_hi:"नमस्ते FormSathi, मुझे इसमें मदद चाहिए: ",wa_gen:"नमस्ते FormSathi, मुझे एक ऑनलाइन फॉर्म में मदद चाहिए।",toggle:"English"}
};

let lang = "hi"; // डिफ़ॉल्ट भाषा हिंदी
try { lang = localStorage.getItem("fs_lang_v2") || "hi"; } catch (e) {}

const waLink = text => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl = u => /^https?:\/\//i.test(u) ? esc(u) : "";

function renderJobs() {
  const box = document.getElementById("jobList"), t = T[lang];
  if (!JOBS.length) { box.innerHTML = '<p class="empty">' + t.j_empty + "</p>"; return; }
  box.innerHTML = JOBS.map(j => {
    const row = (k, v) => v ? "<dt>" + t[k] + "</dt><dd>" + esc(v) + "</dd>" : "";
    const dates = [j.startDate, j.lastDate].filter(Boolean).join(" – ");
    const n = safeUrl(j.notificationUrl), a = safeUrl(j.applyUrl);
    return '<article class="card job"><h3>' + esc(j.title) + '</h3><p class="org">' + esc(j.org) + "</p><dl>" +
      row("jl_qual", j.qualification) + row("jl_age", j.age) + row("jl_vac", j.vacancies) + row("jl_dates", dates) +
      row("jl_fee", j.fee) + row("jl_sel", j.selection) + "</dl>" +
      '<div class="links">' +
      (n ? '<a class="btn small" href="' + n + '" target="_blank" rel="noopener">' + t.jl_notif + "</a>" : "") +
      (a ? '<a class="btn small" href="' + a + '" target="_blank" rel="noopener">' + t.jl_apply + "</a>" : "") +
      "</div>" + (j.updated ? '<p class="upd">' + t.jl_upd + ": " + esc(j.updated) + "</p>" : "") + "</article>";
  }).join("");
}

function setLanguage(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.getElementById("languageBtn").textContent = T[l].toggle;
  renderJobs();
  try { localStorage.setItem("fs_lang_v2", l); } catch (e) {}
}

/* WhatsApp buttons: general links and service buttons (data-service) */
document.addEventListener("click", e => {
  const svc = e.target.closest("[data-service]");
  const gen = e.target.closest("[data-wa]");
  if (svc) {
    window.open(waLink(T[lang].wa_hi + svc.dataset.service), "_blank", "noopener");
  } else if (gen) {
    e.preventDefault();
    window.open(waLink(T[lang].wa_gen), "_blank", "noopener");
  }
});

document.getElementById("languageBtn").addEventListener("click", () => setLanguage(lang === "en" ? "hi" : "en"));

/* Mobile menu */
const menuBtn = document.getElementById("menuBtn"), menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

/* Open the matching legal box when a footer link is used */
document.querySelectorAll('.foot-links a[href^="#p"],.foot-links a[href^="#t"],.foot-links a[href^="#d"]').forEach(a => {
  a.addEventListener("click", () => { const d = document.querySelector(a.getAttribute("href")); if (d) d.open = true; });
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(lang);