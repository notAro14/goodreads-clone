import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const makeEmptyApi = () =>
  createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Article"],
    endpoints: () => ({}),
  });
export type EmptyApi = ReturnType<typeof makeEmptyApi>;
