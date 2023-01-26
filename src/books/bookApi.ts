import { Dependencies } from "src/store";
import { EmptyApi } from "src/store/emptyApi";
import type { Book, SearchQuery } from "./entities/Book";

export const makeBookApi = (emptyApi: EmptyApi) => {
  return emptyApi.injectEndpoints({
    endpoints: (build) => ({
      searchBook: build.query<Book[], SearchQuery>({
        providesTags: (_res, _err, arg) => [{ type: "Book", id: arg }],
        async queryFn(searchQuery, api) {
          const { dependencies } = api.extra as { dependencies: Dependencies };
          const results = await dependencies.bookGateway?.search(searchQuery);
          if (results)
            return {
              data: results,
            };
          return {
            error: "Failed to get results",
          };
        },
      }),
    }),
  });
};

export type BookApi = ReturnType<typeof makeBookApi>;
