import React, { useState } from "react";
import { ReviewFormProps } from "./review-form.props";
import styles from "./review-form.module.css";
import cn from "classnames";
import Input from "../input/input";
import Rating from "../rating/rating";
import TextArea from "../text-area/text-area";
import Button from "../button/button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewResponse } from "./review-form.interface";
import axios from "axios";
import CloseIcon from "./close.svg";

const ReviewForm = ({
  productid,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = async (formData: IReviewForm) => {
    setIsSuccess(false);
    setError(false);
    try {
      const { status } = await axios.post<IReviewResponse>(
        `${process.env.NEXT_PUBLIC_API}/posts`,
        { ...formData, productid: productid }
      );
      if (status === 201) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          placeholder="Name"
          type="text"
          className={styles.name}
          error={errors.name}
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
        />
        <Input
          placeholder="Title"
          type="text"
          className={styles.title}
          error={errors.title}
          {...register("title", {
            required: { value: true, message: "Title is required" },
          })}
        />
        <div className={styles.rating}>
          <span>Rating:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Rating is required" } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <TextArea
          placeholder="Description"
          className={styles.description}
          error={errors.description}
          {...register("description", {
            required: { value: true, message: "Description is required" },
          })}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Submit</Button>
          <span className={styles.info}>
            * Your review will be moderated and reviewed before being published.
          </span>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Review sent successfully!</div>
          <div>Thanks your review will published after testing</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          <div className={styles.errorTitle}>Something went wrong</div>
          <CloseIcon className={styles.close} onClick={() => setError(false)} />
        </div>
      )}
    </form>
  );
};

export default ReviewForm;
