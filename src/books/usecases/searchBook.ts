import { AppDispatch } from "src/store";
import { BookApi } from "../bookApi";
import type { SearchQuery } from "../entities/Book";

interface Dep {
  dispatch: AppDispatch;
  bookApi: BookApi;
}

export function searchBook(dep: Dep) {
  return function (searchQuery: SearchQuery) {
    const { dispatch, bookApi } = dep;
    return dispatch(bookApi.endpoints.searchBook.initiate(searchQuery));
  };
}
