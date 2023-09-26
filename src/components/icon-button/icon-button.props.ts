import { DetailedHTMLProps, HTMLAttributes } from "react";
import up from "./icons/up.svg";
import close from "./icons/close.svg";
import menu from "./icons/menu.svg";

export const icons = { up, close, menu };

export type IconType = keyof typeof icons;

export interface IconButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconType;
  appearance: "primary" | "white";
}
