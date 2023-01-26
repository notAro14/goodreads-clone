import { useMemo, useState } from "react";
import { SearchQuery } from "src/books/entities/Book";
import { bookApi } from "src/config/api";
import { useAppSelector } from "src/store/hooks";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>("");

  return (
    <div>
      <SearchInput setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <BookResults searchQuery={searchQuery} />
    </div>
  );
}

function BookResults({ searchQuery }: { searchQuery: SearchQuery }) {
  const selector = useMemo(
    () => bookApi.endpoints.searchBook.select(searchQuery),
    [searchQuery]
  );
  const { data } = useAppSelector(selector);

  if (!data) return null;
  return (
    <ul>
      {data.map((book) => {
        return <li key={book.isbn13}>{book.title}</li>;
      })}
    </ul>
  );
}

function SearchInput({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: SearchQuery;
  setSearchQuery(searchQuery: SearchQuery): void;
}) {
  const [trigger, { isFetching, isLoading }] = bookApi.useLazySearchBookQuery();
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        trigger(searchQuery, true);
      }}
    >
      <label htmlFor="query">Keywords</label>
      <input onChange={(evt) => setSearchQuery(evt.target.value)} id="query" />
      <button
        type="submit"
        disabled={isFetching || isLoading || searchQuery.length === 0}
      >
        Search
      </button>
    </form>
  );
}
