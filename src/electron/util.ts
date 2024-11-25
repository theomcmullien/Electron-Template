import { ipcMain, WebContents, WebFrameMain } from 'electron';
import { getUIPath } from './paths.js';
import { pathToFileURL } from 'url';

export function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

export function ipcMainHandle<Key extends keyof EventMap>(key: Key, handler: () => EventMap[Key]) {
    ipcMain.handle(key, (event) => {
        validateEventFrame(event.senderFrame);
        return handler();
    });
}

export function ipcMainOn<Key extends keyof EventMap>(key: Key, handler: (payload: EventMap[Key]) => void) {
    ipcMain.on(key, (event, payload) => {
        validateEventFrame(event.senderFrame);
        return handler(payload);
    });
}

export function ipcWebContentsSend<Key extends keyof EventMap>(key: Key, webContents: WebContents, payload: EventMap[Key]) {
    webContents.send(key, payload);
}

function validateEventFrame(frame: WebFrameMain | null) {
    if (!frame) throw new Error('Frame is null');
    if (isDev() && new URL(frame.url).host === 'localhost:5123') return;
    if (frame.url !== pathToFileURL(getUIPath()).toString()) throw new Error('Unknown event');
}
