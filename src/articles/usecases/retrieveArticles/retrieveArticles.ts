import { AppDispatch } from "src/store";
import { ArticleApi } from "src/articles/articleApi";

export const retrieveArticles =
  (articleApi: ArticleApi) => (dispatch: AppDispatch) => {
    return dispatch(articleApi.endpoints.retrieveArticles.initiate());
  };
