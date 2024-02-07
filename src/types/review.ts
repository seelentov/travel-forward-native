import { IUser } from "./user"

export interface IReview {
  id: string
  pagetitle: string,
  avatar: string,
  publishedon: string,
  rating: number,
  review_text: string
}