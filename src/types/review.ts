import { IUser } from "./user"

export interface IReview {
  _id: string
  person: IUser,
  createdAt: Date,
  rating: number,
  text: string
}