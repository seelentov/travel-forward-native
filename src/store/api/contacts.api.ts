
import { IContacts } from '../../types/contacts.js'
import { api, Response } from './api'

export const contactsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<Response<IContacts>, void>({
      query: () => 'contacts/',
      providesTags: ['contacts'],
    }),

  }),
})

export const { useGetContactsQuery } = contactsApi
