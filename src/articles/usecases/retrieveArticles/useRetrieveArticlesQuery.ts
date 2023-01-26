import { useEffect, useMemo } from "react";
import { retrieveArticles } from "src/articles/usecases/retrieveArticles/retrieveArticles";
import { useAppSelector } from "src/store/hooks";
import { articleApi } from "src/config/articleApi";
import { dispatch } from "src/config/store";

export const useRetrieveArticles = () => {
  const selector = useMemo(
    () => articleApi.endpoints.retrieveArticles.select(),
    []
  );
  useEffect(() => {
    const { unsubscribe } = retrieveArticles(articleApi)(dispatch);
    return unsubscribe;
  }, []);

  return useAppSelector(selector);
};
