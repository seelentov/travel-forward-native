
import { IAdvantage } from '../../types/advantage.js'
import { api, Response } from './api'

export const advantagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdvantages: builder.query<Response<IAdvantage[]>, void>({
      query: () => 'advantages/',
      providesTags: ['advantages'],
    }),
  }),
})

export const { useGetAdvantagesQuery } = advantagesApi
