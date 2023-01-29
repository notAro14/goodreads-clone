import { AppDispatch, AppStore, configureAppStore } from "src/store";
import { EmptyApi, makeEmptyApi } from "src/store/emptyApi";
import { makeBookApi, BookApi } from "./bookApi";
import type { Book } from "../entities/Book";
import { InMemoryBookGateway } from "../gateways/inMemoryBookGateway";

describe("search a book with the keyword TDD", () => {
  const searchQuery = "TDD";
  const FAKE_RESULTS: Book[] = [
    { isbn13: "123abc", title: "TDD by example" },
    { isbn13: "456def", title: "Modern C++ with TDD" },
  ];

  let inMemory: InMemoryBookGateway;
  let emptyApi: EmptyApi;
  let store: AppStore;
  let dispatch: AppDispatch;
  let bookApi: BookApi;

  beforeEach(() => {
    inMemory = new InMemoryBookGateway();
    inMemory.init = FAKE_RESULTS;

    emptyApi = makeEmptyApi();
    store = configureAppStore({ emptyApi, bookGateway: inMemory });
    dispatch = store.dispatch;

    bookApi = makeBookApi(emptyApi);
  });

  test("initially there are no results", () => {
    const searchBookSelector = bookApi.endpoints.searchBook.select(searchQuery);
    expect(searchBookSelector(store.getState()).data).toEqual<
      Book[] | undefined
    >(undefined);
  });

  test("many results found", async () => {
    await dispatch(bookApi.endpoints.searchBook.initiate(searchQuery));
    const searchBookSelector = bookApi.endpoints.searchBook.select(searchQuery);
    expect(searchBookSelector(store.getState()).data).toEqual<Book[]>(
      FAKE_RESULTS
    );
  });
});
