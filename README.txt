FORMSATHI – SETUP AND EDITING GUIDE
===================================
Files (keep all in ONE folder):
  index.html  - page content and structure
  style.css   - colours and layout (colours are at the top of the file)
  script.js   - WhatsApp number, job listings, Hindi/English text
  FormSathi Green Education Logo.png - your logo (do not rename)

1. SET YOUR WHATSAPP NUMBER (required)
   Open script.js. At the top, change
     const WHATSAPP_NUMBER = "91XXXXXXXXXX";
   to your number with country code, digits only. Example: "919876543210"

2. ADD A JOB (only verified information)
   In script.js, find  const JOBS = [];  and add a block between the brackets:
     { title:"Job name", org:"Organisation", qualification:"...", age:"...",
       vacancies:"", startDate:"", lastDate:"", fee:"", selection:"",
       notificationUrl:"https://official-site/notification.pdf",
       applyUrl:"https://official-site/apply", updated:"15 Oct 2026" },
   Leave a field as "" to hide it. Separate jobs with commas.
   Never write vacancies, dates or links you have not checked.

3. CHANGE TEXT
   Every visible sentence is in script.js, inside T (en = English, hi = Hindi).
   Change the same key in BOTH languages.

4. TEST IN VS CODE
   Install the "Live Server" extension. Right-click index.html -> Open with Live Server.
   Press F12 -> phone icon to check mobile sizes. Click every button, including
   the language button and all WhatsApp buttons.

5. PUBLISH ON GITHUB PAGES
   Upload all four files to your repository (replace the old ones, same names).
   GitHub -> Settings -> Pages -> Source: Deploy from a branch -> main / root -> Save.
   Wait 1-2 minutes and refresh your site.

Safety: never ask users for passwords, OTPs or PINs.
