
# 📘 English Janala

English Janala is a web application designed to help users learn English vocabulary through lessons, FAQs, and interactive UI components. The app is built with modern web technologies and follows a structured layout inspired by Figma design.



## Features

🔝 Navbar

Fixed at the top with bottom border.

Logo & brand name on the left.

Three buttons with icons:

FAQ → Smooth scrolls to FAQ section.

Learn → Smooth scrolls to Vocabulary section.

Logout → Logs the user out and hides sections.

🎯 Banner

Left: Title, paragraph, and login form.

Right: Banner image as per Figma.

Fully aligned with the given design.

❓ FAQ Section

Includes answers to the following JavaScript questions:

Difference between var, let, and const.

Difference between map(), forEach(), and filter().

Explanation of arrow functions vs regular functions.

How JavaScript Promises work.

How closures work in JavaScript.

📖 Vocabulary Section

Center-aligned heading.

Dynamically generated lesson buttons (from API-01).

Default text displayed until a lesson is chosen.

On lesson selection (API-02):

Display vocabulary in card format:

Word

Meaning & pronunciation

Two action buttons with icons

Show No Word Found if no data exists.

Active lesson button is highlighted.

Loading spinner shown while data is being fetched.

📑 Vocabulary Details (Modal)

On clicking the details icon, fetch data from API-03 and display in a modal:

Word & pronunciation

Example sentence

Synonyms

Complete Learning button (closes modal).

🔐 Login / Logout Flow

Login form validation:

Show alert if name is empty.

Show alert if password is not 123456.

On success → Show alert, hide banner, and display Navbar + Vocabulary + FAQ sections.

Logout button:

Hides Navbar + Vocabulary + FAQ.

Shows only Banner + Footer.

🌐 Footer

Logo + social media icons.

Social links open in a new tab.






## 🛠️ Tech Stack

HTML5, CSS3, JavaScript (ES6+)

Figma Design Reference

API Integration (Lesson & Vocabulary Data)

## Documentation



[Client_Side_Link](https://github.com/AmenaGithub678/english-learning-platform)

[LIVE DEMO](https://cool-frangipane-597721.netlify.app/)
