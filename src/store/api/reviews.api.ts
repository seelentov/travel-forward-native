
import { ICatalogItem } from '../../types/catalog.js'
import { IReview } from '../../types/review.js'
import { api, Response } from './api'

export const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<Response<IReview[]>, void>({
      query: () => 'reviews/',
      providesTags: ['reviews'],
    }),

  }),
})

export const { useGetReviewsQuery } = reviewsApi
