import React from "react";
import styles from "./text-area.module.css";
import cn from "classnames";
import { TextAreaProps } from "./text-area.props";

const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(styles.textArea, className)} {...props} />;
};

export default TextArea;
