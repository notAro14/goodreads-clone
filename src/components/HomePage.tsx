import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchForm from "./SearchForm";
import BookResults from "./BookResults";

export default function HomePage() {
  const router = useRouter();
  const searchQuery = ((router.query.search as string) || undefined) ?? "";
  const onSubmit = (q: string) => {
    router.replace({ pathname: "/", query: { search: q } });
  };
  return (
    <Container>
      <SearchForm searchQuery={searchQuery} onSearch={onSubmit} />
      <BookResults searchQuery={searchQuery} />
    </Container>
  );
}
