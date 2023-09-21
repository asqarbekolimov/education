import { FieldError } from "react-hook-form";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  error?: FieldError;
  setRating?: (rating: number) => void;
}
