
import { api, Response } from './api'

export const textApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getText: builder.query<Response<Text>, void>({
      query: () => '/titledescs',
      providesTags: ['text'],
    }),
  }),
})

export const { useGetTextQuery } = textApi
