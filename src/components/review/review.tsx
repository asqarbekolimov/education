import React from "react";
import { ReviewProps } from "./review.props";
import styles from "./review.module.css";
import cn from "classnames";
import UserIcon from "./user.svg";
import Rating from "../rating/rating";

const Review = ({ review }: ReviewProps): JSX.Element => {
  return (
    <div className={styles.review}>
      <UserIcon className={styles.user} />
      <div className={styles.span}>
        <span className={styles.name}>{review.name}</span>
        <span>{review.title}</span>
      </div>

      <div className={styles.rating}>
        <Rating rating={review.rating} />
      </div>

      <div className={styles.description}>{review.description}</div>
    </div>
  );
};

export default Review;
