import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'


// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://37.230.196.234',
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    // const token = (getState() as RootState).auth.token
    // if (token) {
    //   headers.set('authentication', `Bearer ${token}`)
    // }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })


export const api = createApi({

  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['User'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})