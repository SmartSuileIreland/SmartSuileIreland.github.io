# SmartSuile Website

## Requirements
- Node.js
- npm

## Installation
Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# [Optional] Step 3.1: If publishing on GitHub Pages, install `gh-pages` package
npm install gh-pages --save-dev

# [Optional] Step 3.2: If publishing on GitHub Pages, add deploy script to `package.json`. This will push the changes to `gh-pages` branch and trigger GitHub Actions to build the website.
"scripts": {
    "deploy": "gh-pages -d dist"
}

# Step 4: Start the development server with auto-reloading and an instant preview (for local testing and improvement).
npm run dev

# Step 5: Build the project locally (freshly build the website before deploying - prevents outdated or broken builds).
npm run build

# Step 6: Deploy the project (deploy site, e.g., upload on GitHub Pages).
npm run deploy
```

## Normal workflow with GitHub pages
```sh
# 1. After making changes to the code base - you build.
npm run build

# 2. Test the new build locally
npm run dev

# 3. Deploy to GitHub Pages after testing locally
npm run deploy
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
