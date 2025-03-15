export type PageProps = {
  // page info
  title: string;
  description: string;

  // extra info
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
