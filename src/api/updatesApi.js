import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiRoute } from '../utils/routes';

const updateApi = createApi({
  reducerPath: 'updateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getApiRoute('UPDATE_PAGE'),
  }),
  endpoints: (builder) => ({
    getUpdatePageData: builder.query({
      query: () => '',
    }),
  }),
});

export default updateApi;
export const { useGetUpdatePageDataQuery } = updateApi;
