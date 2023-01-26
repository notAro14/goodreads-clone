import { InMemoryBookGateway } from "src/books/gateways/inMemoryBookGateway";
import { configureAppStore } from "src/store";
import { emptyApi } from "./api";

const inMemory = new InMemoryBookGateway();
inMemory.init = [{ title: "FP in Scala", isbn13: "123abc" }];

export const store = configureAppStore({
  emptyApi,
  bookGateway: inMemory,
});
export const { dispatch } = store;
