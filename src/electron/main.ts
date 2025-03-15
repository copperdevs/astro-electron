import * as url from "url";
import { app, BrowserWindow } from "electron";
import { AppInfo } from "@/info";

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    title: AppInfo.title,
    backgroundMaterial: AppInfo.windowsMaterial,
    titleBarStyle: AppInfo.customTitleBar ? "hidden" : "default",

    webPreferences: {
      preload: url.fileURLToPath(new URL("preload.mjs", import.meta.url)),
      devTools: false,
    },

    ...(process.platform !== "darwin" && AppInfo.customTitleBar
      ? {
          titleBarOverlay: {
            color: "#00000000",
            symbolColor: "#74b1be",
          },
        }
      : {}),

    trafficLightPosition: { x: 10, y: 12 },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    await win.loadFile("dist/index.html");
  }
});
