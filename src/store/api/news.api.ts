
import { IAdvantage } from '../../types/advantage.js'
import { INewsItem } from '../../types/news.js'
import { api, Response } from './api'

export const newsApi = api.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<Response<INewsItem[]>, void>({
      query: () => 'news/',
      providesTags: ['news'],
    }),
  }),
})

export const { useGetNewsQuery } = newsApi
