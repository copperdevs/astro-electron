export type PageProps = {
  // app info
  appTitle: string;

  // app info
  platform: Platform;
};

export enum Platform {
  AIX = "aix",
  Darwin = "darwin",
  FreeBSD = "freebsd",
  Linux = "linux",
  OpenBSD = "openbsd",
  Sunos = "sunos",
  Win32 = "win32",
}
