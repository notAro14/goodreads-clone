import { ITBookStoreGateway } from "src/books/gateways/ITBookStoreGateway";
import { configureAppStore } from "src/store";
import { emptyApi } from "./api";

export const store = configureAppStore({
  emptyApi,
  bookGateway: new ITBookStoreGateway(),
});
export const { dispatch } = store;
