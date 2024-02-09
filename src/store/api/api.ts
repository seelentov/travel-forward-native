import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_URL = 'https://travelforward.ru/rest/'
export const BASE_URL = 'https://travelforward.ru/'

export type Response<T> = {
  object: T,
  success: boolean,
  message: string,
  code: number
}

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['resources','catalog', 'reviews', 'banners', 'advantages', 'stages', 'about', 'faq', 'news', 'contacts', 'gallery', 'text'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getAll: builder.query<any, void>({
      query: () => 'resources/',
      providesTags: ['resources']
    }),
  }),
})
export const { useGetAllQuery } = api