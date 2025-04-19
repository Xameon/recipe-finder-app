# 🍽️ Recipe Finder App
A simple and responsive recipe search application built with **Next.js (App Router)**, **Tailwind CSS**, and the **Spoonacular API**. Users can search for recipes by query, cuisine, and maximum preparation time, then view results and detailed information about each recipe.

## 🚀 Features
- 🔍 Search for recipes with filters (query, cuisine, max ready time)
- 📄 Server-side rendering for recipe results
- 🧾 Recipe detail page with ingredients
- ⚙️ API caching for performance
- ⏳ React Suspense for loading states
- 📦 Well-organized folder structure with reusable components
- 🧹 ESLint & Prettier for consistent code quality

## 🛠️ Technologies
- Next.js 15 (App Router)
- Tailwind CSS
- Spoonacular
- TypeScript
- ESLint & Prettier
 
## 💻 Required Software
| 🛠️ Tool     | 🔗 Download Links                                                                                                                                                             | 💬 Notes                              |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| **Node.js** | [Windows / macOS / Linux](https://nodejs.org/)                                                                                                                                | Version `20` or higher is required.   |
| **npm**     | [Included with Node.js](https://nodejs.org/)                                                                                                                                  | Installed automatically with Node.js. |
| **VS Code** | [Windows](https://code.visualstudio.com/docs/setup/windows) / [macOS](https://code.visualstudio.com/docs/setup/mac) / [Linux](https://code.visualstudio.com/docs/setup/linux) | Recommended editor.                   |
| **Git**     | [Windows](https://git-scm.com/download/win) / [macOS](https://git-scm.com/download/mac) / [Linux](https://git-scm.com/download/linux)                                         | Version control system.               |
| **Browser** | [Google Chrome](https://www.google.com/chrome/) / [Firefox](https://www.mozilla.org/firefox/new/) / Any modern browser                                                        | Used for testing and running the app. |

## 👍 Recommended VS Code Extensions
| 🧩 Extension                                                                                                        | 📝 Description                                                                                       |
| :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------- |
| [**Better Comments**](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)               | Improve code readability by categorizing comments into alerts, queries, TODOs, highlights, and more. |
| [**Code Spell Checker**](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | A basic spell checker to catch common spelling mistakes in code, comments, strings, and more.        |
| [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                            | Integrates ESLint into VS Code to automatically find and fix problems in JavaScript/TypeScript code. |
| [**Prettier - Code Formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)         | An opinionated code formatter that enforces a consistent style by parsing and reprinting your code.  |

_These extensions help maintain clean and high-quality code._

## 📁 Project Structure
```
app/  <-- Application routes and preferences
├── recipes/
│   └── [id]/
...

components/  <-- Misc components
constants/  <-- Application constants
lib/  <-- Utils & helpers
types/  <-- Models & interfaces
```

## ⚡ Getting Started
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the project:
   ```bash
   npm run dev
   ```
   
## ❗ Before Pushing
1. Format the code:
   ```bash
   npm run prettier
   ```
2. Lint the code:
   ```bash
   npm run lint
   ```
3. Check type errors:
   ```
   npm run tsc
   ```
