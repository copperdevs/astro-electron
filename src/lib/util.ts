import type { PageProps } from "./types";

export function goTo(path: string) {
  window.location.href = path;
}

export function createPageProps({
  title,
  description,
}: {
  title: string;
  description: string;
}): PageProps {
  return {
    title: title,
    description: description,
    platform: process.platform,
  } as PageProps;
}

// methods below aren't really needed for this project they are just lowkey useful so i threw them in here

export function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min: number, max: number): number {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}

export function simplifyText(input: string): string {
  return input
    .toLowerCase()
    .replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, "_");
}

export function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function removeFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return filename;
  }
  return filename.substring(0, lastDotIndex);
}
