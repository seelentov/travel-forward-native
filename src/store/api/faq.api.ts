
import { IFAQ } from '../../types/faq.js'
import { api, Response } from './api'

export const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFAQ: builder.query<Response<IFAQ[]>, void>({
      query: () => 'faq/',
      providesTags: ['faq'],
    }),

  }),
})

export const { useGetFAQQuery } = faqApi
