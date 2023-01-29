import { FormEventHandler, useRef } from "react";
import type { SearchQuery } from "src/books/entities/Book";
import { bookApi } from "src/config/api";

const useSearchBook = (searchQuery: SearchQuery = "") => {
  return bookApi.endpoints.searchBook.useQuery(searchQuery, {
    skip: !searchQuery,
  });
};

export default function SearchForm(props: {
  searchQuery: SearchQuery;
  onSearch(q: string): void;
}) {
  const { searchQuery, onSearch } = props;
  const { isFetching, isLoading } = useSearchBook(searchQuery);
  const isSubmitDisabled = isFetching || isLoading;

  const ref = useRef<HTMLInputElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const searchQuery = ref.current?.value;
    if (!searchQuery) return;
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query">Keywords</label>
      <input defaultValue={searchQuery} id="query" ref={ref} />
      <button type="submit" disabled={isSubmitDisabled}>
        Search
      </button>
    </form>
  );
}
