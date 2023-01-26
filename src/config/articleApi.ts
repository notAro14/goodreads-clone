import { makeArticleApi } from "src/articles/articleApi";
import { emptyApi } from "./emptyApi";

export const articleApi = makeArticleApi(emptyApi);
