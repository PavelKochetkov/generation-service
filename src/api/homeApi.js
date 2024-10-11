import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiRoute } from '../utils/routes';

const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiRoute('HOME_PAGE'),
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '',
    }),
  }),
});

export default homeApi;
export const { useGetDataQuery } = homeApi;
