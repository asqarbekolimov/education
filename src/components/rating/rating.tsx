import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { RatingProps } from "./rating.props";
import styles from "./rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = forwardRef(
  (
    { rating, isEditable = false, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
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
      <div
        className={cn(styles.rating, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      >
        {ratingArry.map((rating, idx) => (
          <span key={idx}>{rating}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
