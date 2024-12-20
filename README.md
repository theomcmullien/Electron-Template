# Resource Manager

Personal electron template for skipping project setup.

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

2. **Transpile electron files (optional)**:

    ```bash
    npm run transpile:electron
    ```

3. **Run development mode (`dev:react`, `dev:electron`, `transpile:electron`)**:
    ```bash
    npm run dev
    ```

## Building for Production

1. **Build the project locally (optional)**:

    ```bash
    npm run build
    ```

2. **Create a distributable package (`transpile:electron`, `build`, `electron-builder`)**:

    - **Windows**:

        ```bash
        npm run dist-win
        ```

    - **macOS**:

        ```bash
        npm run dist-mac
        ```

    - **Linux**:

        ```bash
        npm run dist-linux
        ```
