import { ProdArticleGateway } from "src/articles/gateways/prodArticleGateway";
import { configureAppStore } from "src/store";
import { emptyApi } from "./emptyApi";

const articleGateway = new ProdArticleGateway();
export const store = configureAppStore({
  emptyApi,
  articleGateway,
});
export const { dispatch } = store;
