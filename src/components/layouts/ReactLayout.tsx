import { Flex, Theme as RadixTheme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { Titlebar, TitlebarDropdowns } from "@/components/ui/Titlebar";
import { type PageProps } from "@/lib";

export function ReactLayout({
  props,
  children,
}: {
  props: PageProps;
  children: ReactNode;
}) {
  return (
    <RadixTheme
      accentColor="jade"
      grayColor="slate"
      radius="large"
      appearance="dark"
      hasBackground={true}
    >
      <Toaster theme="dark" richColors expand visibleToasts={16} />
      <Titlebar props={{ title: props.appTitle, platform: props.platform }}>
        <TitlebarDropdowns />
      </Titlebar>
      {children}
    </RadixTheme>
  );
}
