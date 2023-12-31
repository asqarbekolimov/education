import React, { useState } from "react";
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import cn from "classnames";
import LogoIcon from "../logo.svg";
import { IconButton } from "../../components";
import Sidebar from "../sidebar/sidebar";
import { motion } from "framer-motion";

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffnes: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        stiffnes: 20,
      },
    },
  };

  return (
    <div className={cn(className, styles.header)} {...props}>
      <LogoIcon />
      <IconButton icon="menu" appearance="white" onClick={toggleMenu} />
      <motion.div
        variants={variants}
        initial={"closed"}
        animate={isOpen ? "opened" : "closed"}
        className={styles.mobileMenu}
      >
        <Sidebar />
        <IconButton
          className={styles.closeIcon}
          icon="close"
          appearance="white"
          onClick={toggleMenu}
        />
      </motion.div>
    </div>
  );
};

export default Header;
