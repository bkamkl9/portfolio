# Developer Portfolio

A modern, responsive developer portfolio built with Vue 3 and TypeScript.  
Showcases personal information, experience, and passions with a clean UI.

## Features

- About Me section
- Project and experience highlights
- Custom UI components
- Responsive design

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Run the development server:
   ```
   npm run dev
   ```

## Deployment with GitHub Actions

This project is automatically deployed to GitHub Pages using GitHub Actions.

### How it works

- On every push to the `main` branch, a GitHub Actions workflow builds the app and deploys the output to GitHub Pages.
- The workflow file is located at `.github/workflows/deployment.yaml`.

### Manual Deployment

1. Commit and push your changes to the `main` branch.
2. The GitHub Actions workflow will:
   - Install dependencies
   - Build the app
   - Deploy the contents of the `dist` folder to GitHub Pages

You can check the status of deployments in the **Actions** tab of your GitHub repository.
