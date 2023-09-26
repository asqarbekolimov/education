import { useEffect } from "react";
import { useScrollY } from "../../hooks/useScrollY";
import styles from "./scroll-up.module.css";
import UpIcon from "./up.svg";
import { motion, useAnimation } from "framer-motion";

const ScrollUp = () => {
  const scrollY = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    scrollY > 200 && (
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        exit={{ y: 100, transition: { duration: 0.6 } }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        className={styles.scrollUp}
        onClick={scrollToTop}
      >
        <UpIcon />
      </motion.button>
    )
  );
};

export default ScrollUp;
