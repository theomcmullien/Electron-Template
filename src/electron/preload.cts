const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {} satisfies Window['electron']);

function ipcRendererInvoke<Key extends keyof EventMap>(key: Key): Promise<EventMap[Key]> {
    return electron.ipcRenderer.invoke(key);
}

function ipcRendererOn<Key extends keyof EventMap>(key: Key, callback: (payload: EventMap[Key]) => void) {
    const cb = (event: Electron.IpcRendererEvent, payload: any) => callback(payload);
    electron.ipcRenderer.on(key, cb);
    return () => electron.ipcRenderer.off(key, cb);
}

function ipcRendererSend<Key extends keyof EventMap>(key: Key, payload: EventMap[Key]) {
    electron.ipcRenderer.send(key, payload);
}
