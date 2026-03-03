# 🏛️ GovMSE+ — AI-Powered Compliance for MSMEs
Deployed link: https://govmse.onrender.com/


**GovMSE+** is an AI-powered SaaS platform designed to empower Micro, Small, and Medium Enterprises (MSMEs) in India by simplifying government compliance. It helps users assess their compliance status, receive actionable suggestions, and generate professional reports for schemes, tenders, and funding applications.

---

## 🌐 Features

### ✅ GovScore Checker
- Check if your MSME has all key government compliance documents (GST, Udyam, PAN, etc.)
- Instantly calculate a **GovScore out of 100**
- Get visual cues and recommendations to improve compliance

### 🤖 AI Assistant
- Based on your GovScore, get **Delhi-specific, hardcoded suggestions** to improve compliance
- Chat-style tips for improving your legal standing and accessing schemes

### 📋 Checklist Generator
- Tick available documents
- Generate a **print-ready, professional PDF report** for stakeholders

### 📄 Compliance Vault (Pro Feature)
- Exclusive PDF report includes: GovScore, document status, suggestions, and MSME details
- Tailored for banks, tenders, funding applications

### 👤 Profile Page
- View email, token expiry, and logout options
- Copy email functionality

### 🏠 Dashboard & Home
- Visually appealing overview of features with call-to-actions

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS
- **PDF Generation**: jsPDF
- **Authentication**: JWT (Token stored in browser)
- **Routing**: React Router DOM

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/GovMSE.git
cd GovMSE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm run dev
```

This will run the app locally at `http://localhost:5173` (if using Vite).

---

## 📁 Folder Structure

```
/src
  ├── /pages
  │    ├── Dashboard.jsx
  │    ├── GovScore.jsx
  │    ├── Assistant.jsx
  │    ├── Checklist.jsx
  │    ├── Report.jsx
  │    └── UserProfile.jsx
  ├── /components
  │    └── Navbar.jsx
  ├── App.jsx
  └── main.jsx
```

---

## 📧 Contact

Need help or want to contribute? Reach us at [support@govmse.in](mailto:support@govmse.in)

---

© {year} GovMSE. All rights reserved.
