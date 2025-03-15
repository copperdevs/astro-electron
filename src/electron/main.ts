import * as url from "url";
import { app, BrowserWindow, nativeTheme } from "electron";

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    title: "Main window",
    backgroundMaterial: "mica",
    titleBarStyle: "hidden",

    webPreferences: {
      preload: url.fileURLToPath(new URL("preload.mjs", import.meta.url)),
      // devTools: false,
    },

    ...(process.platform !== "darwin"
      ? {
          titleBarOverlay: {
            color: "#00000000",
            symbolColor: "#74b1be",
          },
        }
      : {}),
  });

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    // Load your file
    await win.loadFile("dist/index.html");
  }
});
