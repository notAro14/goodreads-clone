import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const makeEmptyApi = () =>
  createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Book"],
    endpoints: () => ({}),
  });
export type EmptyApi = ReturnType<typeof makeEmptyApi>;
