export type PageProps = {
  appInfo: AppInfo;
  platform: Platform;
};

export enum Platform {
  AIX = "aix",
  Darwin = "darwin",
  FreeBSD = "freebsd",
  Linux = "linux",
  OpenBSD = "openbsd",
  Sunos = "sunos",
  Windows = "win32",
}

export type WindowsMaterial = "auto" | "none" | "mica" | "acrylic" | "tabbed";

export type AppInfo = {
  title: string;
  windowsMaterial: WindowsMaterial;
  customTitleBar: boolean;
};
