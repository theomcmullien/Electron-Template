import { app, BrowserWindow } from 'electron';
import { isDev } from './util.js';
import { getPreloadPath, getUIPath } from './paths.js';
import { createMenu } from './menu.js';

// Menu.setApplicationMenu(null); //disable menu

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: getPreloadPath(),
        },
    });

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123');
        // mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(getUIPath());
    }

    createMenu(mainWindow);
});
