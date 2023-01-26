import { configureStore } from "@reduxjs/toolkit";
import type { ArticleGateway } from "src/articles/gateways/ArticleGateway";
import type { ArticleApi } from "../articles/articleApi";
import type { BookApi } from "src/books/bookApi";
import type { BookGateway } from "src/books/gateways/BookGateway";
import type { EmptyApi } from "./emptyApi";

export const configureAppStore = (dependencies: Dependencies) => {
  const emptyApi = dependencies.emptyApi as EmptyApi;
  return configureStore({
    reducer: {
      [emptyApi.reducerPath]: emptyApi.reducer,
    },
    middleware(gdm) {
      return gdm({
        thunk: {
          extraArgument: {
            dependencies,
          },
        },
      }).concat(emptyApi.middleware);
    },
  });
};
export type Dependencies = Partial<{
  articleApi: ArticleApi;
  articleGateway: ArticleGateway;
  bookApi: BookApi;
  bookGateway: BookGateway;
  emptyApi: EmptyApi;
}>;
export type AppStore = ReturnType<typeof configureAppStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
