/**
 * GFLP Designer Handoff Automation (Google Form Script)
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Form script editor.
 * 2. Overwrite the existing code with this.
 * 3. Run `sendTestEmail()` once to authorize.
 * 4. IMPORTANT: Ensure your Form Triggers are set to "On form submit".
 */

// ========== CONFIGURATION ==========

// 1. Designer Email Mapping
// keys must MATCH the "Language" dropdown in your Form exactly.
const DESIGNER_EMAILS = {
  "Mandinka": "tonymalick398@gmail.com", // Lamin Dibba
  "Wolof": "ceek2016@gmail.com",    // Kemmy
  "Seereer": "laminmarenah@example.com", // Lamin Marenah (placeholder if not provided, please update)
  "Jola": "omardarboe83@gmail.com", // Omar Danboe
  "Pulaar": "tonymalick398@gmail.com", // Malick Tony Gomez
  
  // Placeholders for remaining languages
  "English": "nasir.baba@learningmasterminds.org",
  "Sarahule": "nasir.baba@learningmasterminds.org",
  "Manjaku": "nasir.baba@learningmasterminds.org"
};

// 2. CC Recipients
const CC_EMAILS = [
  "nasir.baba@learningmasterminds.org"
];

// 3. Email Subject Template
const EMAIL_SUBJECT_PREFIX = "🎨 [DESIGNER HANDOFF]";

// ========== MAIN FUNCTION ==========

/**
 * Triggered automatically when the Form is submitted.
 * Handles both Form bound scripts and Spreadsheet bound scripts.
 * @param {Object} e - The event object from the form submission
 */
function onFormSubmit(e) {
  try {
    let language = "";
    let grade = "";
    let materialType = "";
    let notes = "";
    let allFiles = []; // Array of file IDs

    // --- CASE 1: Script is bound to the Google Form (Most Likely) ---
    if (e.response && e.response.getItemResponses) {
      Logger.log("Processing as Form Response");
      const itemResponses = e.response.getItemResponses();
      
      // Loop through responses to find data by Question Title
      itemResponses.forEach(itemResponse => {
        const title = itemResponse.getItem().getTitle();
        const response = itemResponse.getResponse();
        
        switch (title) {
          case "Language": language = response; break;
          case "Grade Level": grade = response; break;
          case "Material Type": materialType = response; break;
          case "Notes": notes = response || ""; break;
          case "Upload File": 
            // In Form script, file upload response is Array of IDs: ['id1', 'id2']
            if (Array.isArray(response)) {
                allFiles = response;
            } else if (response) {
                allFiles = [response];
            }
            break;
        }
      });
      
    // --- CASE 2: Script is bound to the Spreadsheet (Legacy) ---
    } else if (e.namedValues) {
      Logger.log("Processing as Spreadsheet Response");
      const responses = e.namedValues;
      language = responses["Language"] ? responses["Language"][0] : "";
      grade = responses["Grade Level"] ? responses["Grade Level"][0] : "";
      materialType = responses["Material Type"] ? responses["Material Type"][0] : "";
      notes = responses["Notes"] ? responses["Notes"][0] : "";
      
      // In Sheet script, file upload is comma-separated URL string
      const fileUrls = responses["Upload File"] ? responses["Upload File"][0] : "";
      if (fileUrls) {
        allFiles = fileUrls.split(",").map(url => {
          // Extract ID from URL: https://drive.google.com/open?id=XXXXX
          const match = url.match(/id=([a-zA-Z0-9_-]+)/);
          return match ? match[1] : url.trim(); 
        });
      }
    } else {
      throw new Error("Unknown event object structure. Are triggers set correctly?");
    }

    Logger.log(`Processing submission for: ${language}`);

    // Verify critical data
    if (!language) {
      throw new Error("Language field is missing or empty.");
    }

    // 1. Get File Attachments
    let fileBlobs = [];
    allFiles.forEach(id => {
      try {
        const file = DriveApp.getFileById(id);
        fileBlobs.push(file.getBlob());
        Logger.log("Found file: " + file.getName());
      } catch (err) {
        Logger.log("Error getting file " + id + ": " + err.message);
      }
    });

    // 2. Determine Recipient
    let recipient = DESIGNER_EMAILS[language];
    if (!recipient) {
      // Fallback
      recipient = "nasir.baba@learningmasterminds.org";
      Logger.log("⚠️ Language '" + language + "' not found in map. Defaulting to Nasir.");
    }

    // 3. Construct Email
    const subject = `${EMAIL_SUBJECT_PREFIX} ${language} - ${grade} - ${materialType}`;
    
    let body = `Hello,\n\n`;
    body += `A new layout-ready draft has been submitted for **${language}**.\n\n`;
    body += `📚 **Details**:\n`;
    body += `- Grade: ${grade}\n`;
    body += `- Type: ${materialType}\n`;
    if (notes) body += `- Notes: ${notes}\n`;
    body += `\nPlease find the attached file(s) for layout.\n\n`;
    body += `Best regards,\nFLP Materials Team`;

    // 4. Send Email
    MailApp.sendEmail({
      to: recipient,
      cc: CC_EMAILS.join(","),
      subject: subject,
      body: body,
      attachments: fileBlobs
    });
    
    Logger.log("✅ Email sent to " + recipient);
    
  } catch (error) {
    Logger.log("❌ Error in onFormSubmit: " + error.toString());
    // Send failure notification to admin
    MailApp.sendEmail({
      to: "nasir.baba@learningmasterminds.org",
      subject: "❌ [FAILURE] Designer Handoff Script Error",
      body: "Error log:\n" + error.toString() + "\n\nStack:\n" + error.stack
    });
  }
}

// ========== TEST UTILITIES ==========

function sendTestEmail() {
  const testRecipient = "nasir.baba@learningmasterminds.org";
  Logger.log("🧪 Sending Test Email to: " + testRecipient);
  try {
    MailApp.sendEmail({
      to: testRecipient,
      subject: "[TEST] Designer Handoff System Check",
      body: "This is a test email to verify permissions."
    });
    Logger.log("✅ Test email sent successfully.");
  } catch (e) {
    Logger.log("❌ Test failed: " + e.message);
  }
}
