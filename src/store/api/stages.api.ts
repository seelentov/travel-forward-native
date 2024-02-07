
import { IAdvantage } from '../../types/advantage.js'
import { api, Response } from './api'

export const stagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStages: builder.query<Response<IAdvantage[]>, void>({
      query: () => 'stages/',
      providesTags: ['stages'],
    }),
  }),
})

export const { useGetStagesQuery } = stagesApi
