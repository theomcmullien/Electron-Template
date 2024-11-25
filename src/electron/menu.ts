import { app, BrowserWindow, Menu } from 'electron';
import { isDev } from './util.js';

export function createMenu(mainWindow: BrowserWindow) {
    Menu.setApplicationMenu(
        Menu.buildFromTemplate([
            {
                label: process.platform === 'darwin' ? undefined : 'App',
                type: 'submenu',
                submenu: [
                    { label: 'Dev Tools', click: () => mainWindow.webContents.openDevTools(), visible: isDev() },
                    { label: 'Quit', click: app.quit },
                ],
            },
        ])
    );
}
