export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface IReviewResponse {
  name: string;
  rating: number;
  descritption: string;
  title: string;
  id: number;
  productId: string;
}
