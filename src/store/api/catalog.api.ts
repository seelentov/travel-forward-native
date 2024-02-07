
import { ICatalogItem } from '../../types/catalog.js'
import { api, Response } from './api'

export const catalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCatalog: builder.query<Response<ICatalogItem[]>, void>({
      query: () => 'services/',
      providesTags: ['catalog'],
    }),

  }),
})

export const { useGetCatalogQuery } = catalogApi
