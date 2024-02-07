

import { api, Response } from './api'

export const newsApi = api.injectEndpoints({
  endpoints: builder => ({
    getGallery: builder.query<Response<string[]>, void>({
      query: () => 'gallery/',
      providesTags: ['gallery'],
    }),
  }),
})

export const { useGetGalleryQuery } = newsApi
