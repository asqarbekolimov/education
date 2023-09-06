import React, { useEffect, useState } from "react";
import { RatingProps } from "./rating.props";
import styles from "./rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArry, setRatingArry] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    renderRating(rating);
  }, [rating]);

  const renderRating = (currentRating: number) => {
    const updateArray = ratingArry.map((r: JSX.Element, idx: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: idx < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeRatingDisplay(idx + 1)}
        onMouseLeave={() => changeRatingDisplay(rating)}
        onClick={() => clickRatingHandler(idx + 1)}
      >
        <StarIcon />
      </span>
    ));
    setRatingArry(updateArray);
  };

  const changeRatingDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    renderRating(index);
  };

  const clickRatingHandler = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  return (
    <div className={styles.rating} {...props}>
      {ratingArry.map((rating, idx) => (
        <span key={idx}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
