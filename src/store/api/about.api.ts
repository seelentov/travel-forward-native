
import { IAbout } from '../../types/about'
import { api, Response } from './api'

export const aboutApi = api.injectEndpoints({
  endpoints: builder => ({
    getAbout: builder.query<Response<IAbout>, void>({
      query: () => 'about/',
      providesTags: ['about'],
    }),
  }),
})

export const { useGetAboutQuery } = aboutApi
