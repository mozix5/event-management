import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/constants.js";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    getEvents: builder.query({
      query: ({ filter, search }) => {
        const params = {};
        if (filter && filter !== "all") params.category = filter;
        if (search) params.searchQuery = search.toString();
        return {
          url: "events",
          params,
        };
      },
    }),
    createEvent: builder.mutation({
      query: (newEvent) => ({
        url: "events/create-event",
        method: "POST",
        body: newEvent,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetEventsQuery,
  useCreateEventMutation,
} = api;
