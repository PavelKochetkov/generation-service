import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiRoute } from '../utils/routes';

const passwordApi = createApi({
  reducerPath: 'passwordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiRoute('PASSWORD_PAGE'),
  }),
  endpoints: (builder) => ({
    getPasswordPageData: builder.query({
      query: () => '',
    }),
  }),
});

export default passwordApi;
export const { useGetPasswordPageDataQuery } = passwordApi;
