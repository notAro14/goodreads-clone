import { makeBookApi } from "src/books/bookApi";
import { makeEmptyApi } from "src/store/emptyApi";

export const emptyApi = makeEmptyApi();
export const bookApi = makeBookApi(emptyApi);
