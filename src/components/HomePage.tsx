import { useRetrieveArticles } from "src/articles/usecases/retrieveArticles/useRetrieveArticlesQuery";

export default function HomePage() {
  const { isLoading, data, isError } = useRetrieveArticles();

  if (isError) return <p role="alert">Failed to get articles</p>;
  if (isLoading) return <p role="progressbar">Loading...</p>;
  if (data)
    return (
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );

  return null;
}
