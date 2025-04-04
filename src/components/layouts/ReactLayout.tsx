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
      {props.appInfo.customTitleBar && (
        <Titlebar
          props={{
            title: props.appInfo.title,
            platform: props.platform,
          }}
        >
          <TitlebarDropdowns />
        </Titlebar>
      )}
      {children}
    </RadixTheme>
  );
}
