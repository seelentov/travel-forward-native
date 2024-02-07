
import { IBanner } from '../../types/banner.js'
import { api, Response } from './api'

export const bannersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query<Response<IBanner[]>, void>({
      query: () => 'banners/',
      providesTags: ['banners'],
    }),
  }),
})

export const { useGetBannersQuery } = bannersApi
