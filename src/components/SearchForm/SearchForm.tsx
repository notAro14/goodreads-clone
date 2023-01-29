import { FormEventHandler, useRef } from "react";
import { Input, FormLabel, FormControl, Button } from "@chakra-ui/react";
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
      <FormControl>
        <FormLabel htmlFor="query">Search a book</FormLabel>
        <Input defaultValue={searchQuery} id="query" ref={ref} />
      </FormControl>
      <Button colorScheme="blue" type="submit" disabled={isSubmitDisabled}>
        Search
      </Button>
    </form>
  );
}
