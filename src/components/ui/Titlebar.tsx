import { goTo } from "@/lib";
import { Button, DropdownMenu, Flex, Separator } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { useStore } from "@nanostores/react";

// TODO: change platform from string to enum with all possible values for electron
export type TitleBarProps = { title: string; platform: string };

// export type

export function Titlebar({
  props,
  children,
}: {
  props: TitleBarProps;
  children?: ReactNode;
}) {
  return (
    <div
      className={`titlebar themeing drag ${
        props.platform === "win32" ? "win" : "mac"
      }`}
    >
      {props.title}

      {children !== undefined && (
        <Separator orientation="vertical" className="spacer" />
      )}
      {children}
    </div>
  );
}

export function TitlebarDropdowns() {
  return (
    <Flex gap="2">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="nodrag">
          <Button variant="soft" size="1" color="gray">
            Pages
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="nodrag" size="1">
          <DropdownMenu.Item onClick={() => goTo("/")}>Home</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => goTo("/clicker")}>
            Clicker
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <BaseDropdown />
      <BaseDropdown />
      <BaseDropdown />
    </Flex>
  );
}

function BaseDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="nodrag">
        <Button variant="soft" size="1" color="gray">
          Options
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="nodrag" size="1">
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
            <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
