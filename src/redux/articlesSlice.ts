import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IArticle } from '../types/types';

const searchParams = new URLSearchParams({
  _limit: '20',
});

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spaceflightnewsapi.net' }),
  endpoints: builder => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => `/v3/articles?${searchParams}`,
    }),
    getArticlesById: builder.query<IArticle, string | void>({
      query: articleId => `/v3/articles/${articleId}`,
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticlesByIdQuery } = articlesApi;
