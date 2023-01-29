import { useAppSelector } from "src/store/hooks";
import type { SearchQuery } from "src/books/entities/Book";
import { bookApi } from "src/config/api";

const useSearchBookSelector = (searchQuery: SearchQuery = "") => {
  const selector = bookApi.endpoints.searchBook.select(searchQuery);
  return useAppSelector(selector);
};

interface Props {
  searchQuery: SearchQuery;
}

export default function BookResults(props: Props) {
  const { searchQuery } = props;
  const { data: books } = useSearchBookSelector(searchQuery);
  if (!books) return null;
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.isbn13}>{book.title}</li>;
      })}
    </ul>
  );
}
