/**
 * GFLP Writer Access Code Email Sender
 * 
 * HOW TO USE:
 * 1. Open Google Apps Script: https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire script
 * 4. Run the function "sendAccessCodeEmails"
 * 5. Grant permissions when prompted (first run only)
 * 
 * NOTE: Test with sendTestEmail() first to preview the email format!
 */

// ========== CONFIGURATION ==========
const PORTAL_URL = "https://learningmasterminds.github.io/Gambia_FLP_dashboard/";
const SENDER_NAME = "Gambia FLP Materials Team";

// Writer access codes (email: code)
const ACCESS_KEYS = {
  "alhagiesowe62@gmail.com": "ASW-762",
  "aboukhan4@gmail.com": "ABK-291",
  "ssurakata89@gmail.com": "SSK-483",
  "mamudout@gmail.com": "MMD-105",
  "victoriagor@gmail.com": "VIC-339",
  "jjmendy66@gmail.com": "JJM-882",
  "bittayeamie037@gmail.com": "BTA-514",
  "gaindow0@gmail.com": "GDW-627",
  "madun.marong@edugambia.gm": "MDN-441",
  "ansusanyang12@gmail.com": "ASN-992",
  "laminbjammeh1@gmail.com": "LJM-308",
  "amsanjie7@gmail.com": "AMS-176",
  "saphiecamara@gmail.com": "SPC-825",
  "kamarastevens88@gmail.com": "KST-881",
  "hotinkmedia@gmail.com": "HIM-112",
  "igoriefe@gmail.com": "IFE-345",
  "camaralisa@gmail.com": "CLS-903",
  "kumbabah06@gmail.com": "KBB-614",
  "eakoto484@gmail.com": "EAK-484",
  "zahra.maishanu@learningmasterminds.org": "ZMN-847",
  "betty.temeng@learningmasterminds.org": "BTM-529",
  "amadoukhan91@gmail.com": "AMK-915",
  "jayeadama2@gmail.com": "JYE-284",
  "vicksingomez1881@gmail.com": "VGM-188",
  "samboumodou53@gmail.com": "SBM-530",
  "philomensayang99@gmail.com": "PHY-991",
  "ceek2016@gmail.com": "KME-111",
  "lamsking@gmail.com": "LDI-222",
  "omardarboe83@gmail.com": "ODA-333",
  "yugosaho@hotmail.com": "ESA-444",
  "tonymalick398@gmail.com": "MTG-398"
};

// ========== EMAIL TEMPLATE ==========
function getEmailSubject() {
  return "🔑 Your GFLP Materials Submission Portal Access – Action Required Daily";
}

function getEmailHtml(email, accessCode) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f0f4f8;">
  <div style="max-width:600px; margin:0 auto; background:#ffffff;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding:30px 20px; text-align:center;">
      <p style="margin:0 0 5px 0; font-size:14px; color:rgba(255,255,255,0.85);">The Gambia</p>
      <h1 style="margin:0 0 8px 0; font-size:22px; color:#ffffff; font-weight:700;">Ministry of Basic & Secondary Education</h1>
      <p style="margin:0; font-size:14px; color:rgba(255,255,255,0.9);">Foundational Learning Project (FLP)</p>
    </div>
    
    <!-- Welcome Banner -->
    <div style="background:#f0fdf4; border-left:4px solid #10b981; padding:20px; margin:20px;">
      <h2 style="margin:0 0 8px 0; font-size:18px; color:#166534;">📤 Your Submission Portal Access is Ready!</h2>
      <p style="margin:0; font-size:14px; color:#15803d; line-height:1.5;">
        You have been granted access to submit your materials for the FLP Term 2 development phase.
      </p>
    </div>
    
    <!-- Credentials Box -->
    <div style="margin:20px; background:#1e3a8a; border-radius:12px; overflow:hidden;">
      <div style="padding:15px 20px; background:rgba(255,255,255,0.1); border-bottom:1px solid rgba(255,255,255,0.1);">
        <h3 style="margin:0; font-size:14px; color:rgba(255,255,255,0.9); font-weight:600;">🔐 YOUR SECURE LOGIN CREDENTIALS</h3>
      </div>
      <div style="padding:20px;">
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0; color:rgba(255,255,255,0.7); font-size:13px; width:100px;">Email:</td>
            <td style="padding:8px 0; color:#ffffff; font-size:15px; font-weight:600;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:rgba(255,255,255,0.7); font-size:13px;">Access Code:</td>
            <td style="padding:8px 0;">
              <span style="background:#fbbf24; color:#1e3a8a; padding:6px 14px; border-radius:6px; font-size:16px; font-weight:700; font-family:monospace;">${accessCode}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    
    <!-- Portal Button -->
    <div style="text-align:center; margin:25px 20px;">
      <a href="${PORTAL_URL}" style="display:inline-block; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#ffffff; text-decoration:none; padding:14px 40px; border-radius:8px; font-size:16px; font-weight:600; box-shadow:0 4px 12px rgba(16,185,129,0.3);">
        🚀 Open Submission Portal
      </a>
    </div>
    
    <!-- Daily Expectation Alert -->
    <div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; margin:20px;">
      <h3 style="margin:0 0 8px 0; font-size:15px; color:#92400e;">📅 Daily Submissions Expected</h3>
      <p style="margin:0; font-size:13px; color:#78350f; line-height:1.6;">
        <strong>Beginning immediately upon receiving this email</strong>, you are expected to submit your completed materials <strong>daily</strong>. 
        If you do not have any materials ready for submission on a particular day, no action is required for that day.
      </p>
    </div>
    
    <!-- How To Submit Section -->
    <div style="margin:20px; padding:20px; background:#f8fafc; border-radius:10px;">
      <h3 style="margin:0 0 16px 0; font-size:16px; color:#1e3a8a; border-bottom:2px solid #e2e8f0; padding-bottom:10px;">📋 How to Submit Your Materials</h3>
      
      <!-- Step 1 -->
      <div style="display:flex; margin-bottom:16px;">
        <div style="flex-shrink:0; width:28px; height:28px; background:#3b82f6; color:#fff; border-radius:50%; text-align:center; line-height:28px; font-size:14px; font-weight:700; margin-right:12px;">1</div>
        <div>
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:600; color:#1e3a8a;">Login</p>
          <p style="margin:0; font-size:13px; color:#64748b;">Enter your email and access code, then click "Verify Identity"</p>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div style="display:flex; margin-bottom:16px;">
        <div style="flex-shrink:0; width:28px; height:28px; background:#3b82f6; color:#fff; border-radius:50%; text-align:center; line-height:28px; font-size:14px; font-weight:700; margin-right:12px;">2</div>
        <div>
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:600; color:#1e3a8a;">Identify Your Material</p>
          <p style="margin:0; font-size:13px; color:#64748b;">Select Language, Grade, Material Type, and Term</p>
        </div>
      </div>
      
      <!-- Step 3 -->
      <div style="display:flex; margin-bottom:16px;">
        <div style="flex-shrink:0; width:28px; height:28px; background:#3b82f6; color:#fff; border-radius:50%; text-align:center; line-height:28px; font-size:14px; font-weight:700; margin-right:12px;">3</div>
        <div>
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:600; color:#1e3a8a;">Select Lessons</p>
          <p style="margin:0; font-size:13px; color:#64748b;">Check the lessons you are submitting (previously submitted lessons are hidden)</p>
        </div>
      </div>
      
      <!-- Step 4 -->
      <div style="display:flex; margin-bottom:16px;">
        <div style="flex-shrink:0; width:28px; height:28px; background:#3b82f6; color:#fff; border-radius:50%; text-align:center; line-height:28px; font-size:14px; font-weight:700; margin-right:12px;">4</div>
        <div>
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:600; color:#1e3a8a;">Upload Your File</p>
          <p style="margin:0; font-size:13px; color:#64748b;">Click the upload area and select your file (PDF, DOC, or DOCX)</p>
        </div>
      </div>
      
      <!-- Step 5 -->
      <div style="display:flex;">
        <div style="flex-shrink:0; width:28px; height:28px; background:#10b981; color:#fff; border-radius:50%; text-align:center; line-height:28px; font-size:14px; font-weight:700; margin-right:12px;">5</div>
        <div>
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:600; color:#166534;">Submit & Wait ✓</p>
          <p style="margin:0; font-size:13px; color:#64748b;">Click "Submit Material" and wait for confirmation</p>
        </div>
      </div>
    </div>
    
    <!-- Critical Warning -->
    <div style="background:#fef2f2; border:2px solid #ef4444; border-radius:10px; padding:16px 20px; margin:20px;">
      <h3 style="margin:0 0 8px 0; font-size:15px; color:#dc2626;">⚠️ CRITICAL: Wait for Success Message!</h3>
      <p style="margin:0; font-size:13px; color:#991b1b; line-height:1.6;">
        After clicking "Submit Material", you <strong>MUST wait</strong> until you see the green success message:
        <br><br>
        <span style="background:#dcfce7; color:#166534; padding:6px 12px; border-radius:4px; display:inline-block; font-weight:600;">"✅ Submission Successful! Your material has been received."</span>
        <br><br>
        <strong>Do NOT navigate away or close your browser</strong> before seeing this message, or your submission will be lost!
      </p>
    </div>
    
    <!-- Quick Tips -->
    <div style="margin:20px; padding:16px; background:#eff6ff; border-radius:8px;">
      <h4 style="margin:0 0 10px 0; font-size:14px; color:#1e40af;">💡 Quick Tips</h4>
      <ul style="margin:0; padding-left:20px; font-size:13px; color:#3b82f6; line-height:1.8;">
        <li>Keep your access code confidential</li>
        <li>Use "Make Another Submission" button for multiple files</li>
        <li>Check the Dashboard tab to view your submission history</li>
        <li>Already-submitted lessons are hidden; click "✏️ Edit" to resubmit</li>
      </ul>
    </div>
    
    <!-- Footer -->
    <div style="background:#1e293b; padding:25px 20px; text-align:center;">
      <p style="margin:0 0 5px 0; font-size:12px; color:rgba(255,255,255,0.6);">The Gambia | Ministry of Basic & Secondary Education</p>
      <p style="margin:0 0 12px 0; font-size:13px; color:rgba(255,255,255,0.8);">Foundational Learning Project (FLP) – Term 2 Materials Development</p>
      <p style="margin:0; font-size:11px; color:rgba(255,255,255,0.5);">This is an automated message. For support, contact the FLP Materials Team.</p>
    </div>
    
  </div>
</body>
</html>
`;
}

// Plain text fallback for email clients that don't support HTML
function getEmailPlainText(email, accessCode) {
  return `YOUR GFLP SUBMISSION PORTAL ACCESS
=====================================

The Gambia | Ministry of Basic & Secondary Education
Foundational Learning Project (FLP)

You have been granted access to submit your materials for the FLP Term 2 development phase.

YOUR SECURE LOGIN CREDENTIALS
-----------------------------
Email: ${email}
Access Code: ${accessCode}

Portal URL: ${PORTAL_URL}

DAILY SUBMISSIONS EXPECTED
--------------------------
Beginning immediately upon receiving this email, you are expected to submit your completed materials DAILY. If you do not have any materials ready on a particular day, no action is required.

HOW TO SUBMIT
-------------
1. LOGIN - Enter your email and access code
2. IDENTIFY - Select Language, Grade, Material Type, and Term
3. SELECT LESSONS - Check the lessons you are submitting
4. UPLOAD - Select your file (PDF, DOC, or DOCX)
5. SUBMIT & WAIT - Click "Submit Material" and WAIT for success message

⚠️ CRITICAL: Wait for Success Message!
After clicking "Submit Material", you MUST wait until you see:
"Submission Successful! Your material has been received."
Do NOT navigate away before seeing this, or your submission will be lost!

---
The Gambia | Ministry of Basic & Secondary Education
Foundational Learning Project (FLP)
`;
}

// ========== MAIN FUNCTIONS ==========

/**
 * Send a test email to yourself first
 */
function sendTestEmail() {
  const testEmail = Session.getActiveUser().getEmail();
  const testCode = "TEST-123";
  
  const subject = "[TEST] " + getEmailSubject();
  const htmlBody = getEmailHtml(testEmail, testCode);
  const plainBody = getEmailPlainText(testEmail, testCode);
  
  MailApp.sendEmail({
    to: testEmail,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: SENDER_NAME
  });
  
  Logger.log("✅ Test email sent to: " + testEmail);
  Logger.log("Check your inbox to preview the email format.");
}

/**
 * Send access code email specifically to Amadou Khan
 * Run this function to send just this single email.
 */
function sendEmailToAmadou() {
  const email = "amadoukhan91@gmail.com";
  const accessCode = ACCESS_KEYS[email];
  
  if (!accessCode) {
    Logger.log("❌ Error: Access code not found for " + email);
    return;
  }
  
  const subject = getEmailSubject();
  const htmlBody = getEmailHtml(email, accessCode);
  const plainBody = getEmailPlainText(email, accessCode);
  
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    Logger.log("✅ Successfully sent email to: " + email);
  } catch (error) {
    Logger.log("❌ Failed to send to " + email + ": " + error.message);
  }
}

/**
 * Send updated access code emails to:
 * - Alhagie Sowe
 * - Ansu Sanya
 * - Lamin Jammeh
 */
function sendUpdatedEmails() {
  const targetEmails = [
    "ansusangang12@gmail.com",
    "laminbjammeh1@gmail.com",
    "alhagiesowe62@gmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending updated access codes to " + targetEmails.length + " specific users...");
  
  targetEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}

/**
 * Send access code email specifically to Bittaye Ami
 */
function sendEmailToBittaye() {
  const email = "bittayeamie037@gmail.com";
  const accessCode = ACCESS_KEYS[email];
  
  if (!accessCode) {
    Logger.log("❌ Error: Access code not found for " + email);
    return;
  }
  
  const subject = getEmailSubject();
  const htmlBody = getEmailHtml(email, accessCode);
  const plainBody = getEmailPlainText(email, accessCode);
  
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    Logger.log("✅ Successfully sent email to: " + email);
  } catch (error) {
    Logger.log("❌ Failed to send to " + email + ": " + error.message);
  }
}

/**
 * Send access codes to the new batch of writers (Feb 3 Addition)
 */
function sendNewBatchEmails() {
  const newEmails = [
    "madun.marong@edugambia.gm",
    "jayeadama2@gmail.com",
    "victoriagomez1881@gmail.com",
    "samboumodou53@gmail.com",
    "philomensayang99@gmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending access codes to NEW batch (" + newEmails.length + " users)...");
  
  newEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}

/**
 * Send access code email specifically to Ansu Sanyang
 */
function sendEmailToAnsu() {
  const email = "ansusanyang12@gmail.com";
  const accessCode = ACCESS_KEYS[email];
  
  if (!accessCode) {
    Logger.log("❌ Error: Access code not found for " + email);
    return;
  }
  
  const subject = getEmailSubject();
  const htmlBody = getEmailHtml(email, accessCode);
  const plainBody = getEmailPlainText(email, accessCode);
  
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    Logger.log("✅ Successfully sent email to: " + email);
  } catch (error) {
    Logger.log("❌ Failed to send to " + email + ": " + error.message);
  }
}

/**
 * Send access code email specifically to Sura (Surakata)
 */
function sendEmailToSura() {
  const email = "ssurakata89@gmail.com";
  const accessCode = ACCESS_KEYS[email];
  
  if (!accessCode) {
    Logger.log("❌ Error: Access code not found for " + email);
    return;
  }
  
  const subject = getEmailSubject();
  const htmlBody = getEmailHtml(email, accessCode);
  const plainBody = getEmailPlainText(email, accessCode);
  
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    Logger.log("✅ Successfully sent email to: " + email);
  } catch (error) {
    Logger.log("❌ Failed to send to " + email + ": " + error.message);
  }
}

/**
 * Send personalized access code emails to ALL writers
 */
function sendAccessCodeEmails() {
  const subject = getEmailSubject();
  let successCount = 0;
  let errorCount = 0;
  const errors = [];
  
  Logger.log("Starting to send emails to " + Object.keys(ACCESS_KEYS).length + " writers...");
  Logger.log("─".repeat(50));
  
  for (const [email, accessCode] of Object.entries(ACCESS_KEYS)) {
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      
      successCount++;
      Logger.log("✅ Sent to: " + email);
      
      // Small delay to avoid rate limits
      Utilities.sleep(500);
      
    } catch (error) {
      errorCount++;
      errors.push({ email: email, error: error.message });
      Logger.log("❌ FAILED: " + email + " - " + error.message);
    }
  }
  
  Logger.log("─".repeat(50));
  Logger.log("SUMMARY:");
  Logger.log("  ✅ Successfully sent: " + successCount);
  Logger.log("  ❌ Failed: " + errorCount);
  
  if (errors.length > 0) {
    Logger.log("\nFailed emails:");
    errors.forEach(e => Logger.log("  - " + e.email + ": " + e.error));
  }
  
  return { success: successCount, failed: errorCount, errors: errors };
}

/**
 * Send access code emails to Saphie Camara and Kamara Stevens
 */
function sendEmailToSaphieAndKamara() {
  const targetEmails = [
    "saphiecamara@gmail.com",
    "kamarastevens88@gmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending access codes to Saphie Camara and Kamara Stevens...");
  
  targetEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}

/**
 * Send access code emails to Hotink Media and Igor Efe
 */
function sendEmailToHotinkAndIgor() {
  const targetEmails = [
    "hotinkmedia@gmail.com",
    "igoriefe@gmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending access codes to Hotink Media and Igor Efe...");
  
  targetEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}



/**
 * Send access code emails to Victoria Gomez and Lamin Jammeh
 */
function sendEmailToVictoriaAndLamin() {
  const targetEmails = [
    "vicksingomez1881@gmail.com",
    "laminbjammeh1@gmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending access codes to Victoria Gomez and Lamin Jammeh...");
  
  targetEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}

/**
 * Check remaining email quota
 */
function checkEmailQuota() {

  const remaining = MailApp.getRemainingDailyQuota();
  Logger.log("Remaining daily email quota: " + remaining);
  Logger.log("Writers to email: " + Object.keys(ACCESS_KEYS).length);
  
  if (remaining < Object.keys(ACCESS_KEYS).length) {
    Logger.log("⚠️ WARNING: Not enough quota! Wait until tomorrow or reduce the list.");
  } else {
    Logger.log("✅ Sufficient quota to send all emails.");
  }
  
  return remaining;
}

/**
 * Send access codes to the new batch (Feb 10)
 */
function sendEmailToNewBatchFeb10() {
  const targetEmails = [
    "ceek2016@gmail.com",
    "lamsking@gmail.com",
    "omardarboe83@gmail.com",
    "yugosaho@hotmail.com"
  ];
  
  const subject = getEmailSubject();
  let successCount = 0;
  
  Logger.log("Sending access codes to the Feb 10 batch...");
  
  targetEmails.forEach(email => {
    const accessCode = ACCESS_KEYS[email];
    if (!accessCode) {
      Logger.log("❌ Error: Code not found for " + email);
      return;
    }
    
    try {
      const htmlBody = getEmailHtml(email, accessCode);
      const plainBody = getEmailPlainText(email, accessCode);
      
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: plainBody,
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      Logger.log("✅ Successfully sent to: " + email);
      successCount++;
    } catch (error) {
      Logger.log("❌ Failed to send to " + email + ": " + error.message);
    }
  });
  
  Logger.log("Finished. Sent " + successCount + " emails.");
}

/**
 * Send access code email specifically to Malick Tony Gomez
 */
function sendEmailToMalick() {
  const email = "tonymalick398@gmail.com";
  const accessCode = ACCESS_KEYS[email];
  
  if (!accessCode) {
    Logger.log("❌ Error: Access code not found for " + email);
    return;
  }
  
  const subject = getEmailSubject();
  const htmlBody = getEmailHtml(email, accessCode);
  const plainBody = getEmailPlainText(email, accessCode);
  
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    Logger.log("✅ Successfully sent email to: " + email);
  } catch (error) {
    Logger.log("❌ Failed to send to " + email + ": " + error.message);
  }
}
