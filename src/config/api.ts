import { makeBookApi } from "src/books/usecases/bookApi";
import { makeEmptyApi } from "src/store/emptyApi";

export const emptyApi = makeEmptyApi();
export const bookApi = makeBookApi(emptyApi);
