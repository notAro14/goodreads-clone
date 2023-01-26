import type { Article } from "src/articles/entities/Article";
import type { EmptyApi } from "src/store/emptyApi";
import { Dependencies } from "src/store";

interface Extra {
  dependencies: Dependencies;
}

export const makeArticleApi = (emptyApi: EmptyApi) =>
  emptyApi.injectEndpoints({
    endpoints(build) {
      return {
        retrieveArticles: build.query<Article[], void>({
          providesTags: ["Article"],
          queryFn: async (_, { extra }) => {
            const { dependencies } = extra as Extra;
            if (!dependencies.articleGateway)
              return {
                error: "Article Gateway must be defined",
              };
            const { data, error } =
              await dependencies.articleGateway.retrieveAll();
            if (error) return { error: error.message };
            return {
              data,
            };
          },
        }),
      };
    },
  });

export type ArticleApi = ReturnType<typeof makeArticleApi>;
