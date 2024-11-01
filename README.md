
# Electron Template

A personal template I made to skip the setup of a new Electron project.

## Features

-   **Language**: TypeScript
-   **Frontend**: React
-   **Backend**: Electron
-   **Bundler**: Vite
-   **Packaging**: Electron-Builder

## Getting Started

1. **Install dependencies (`node_modules`)**:
    ```bash
    npm install
    ```

2. **Build the project locally**:
    ```bash
    npm run build
    ```

3. **Transpile electron files (optional)**:
    ```bash
    npm run transpile:electron
    ```

4. **Run development mode (`dev:react`, `dev:electron`, `transpile:electron`)**:
    ```bash
    npm run dev
    ```

## Building for Production

To create a distributable package for a specific OS, run one of the following commands:

-   **Windows**:

    ```bash
    npm run dist-win
    ```

-   **macOS**:

    ```bash
    npm run dist-mac
    ```

-   **Linux**:
    ```bash
    npm run dist-linux
    ```
