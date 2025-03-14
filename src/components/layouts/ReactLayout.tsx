import { Theme as RadixTheme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

export function ReactLayout({ children }: { children: ReactNode }) {
  return (
    <RadixTheme
      accentColor="jade"
      grayColor="slate"
      radius="large"
      appearance="dark"
      hasBackground={true}
    >
      <Toaster theme="dark" richColors expand visibleToasts={16} />
      {children}
    </RadixTheme>
  );
}
