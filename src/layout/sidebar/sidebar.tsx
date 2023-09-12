import React from "react";
import { SidebarProps } from "./sidebar.props";
import Menu from "../menu/menu";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
