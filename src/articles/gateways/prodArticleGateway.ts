import { Article } from "src/articles/entities/Article";
import type { ArticleGateway } from "src/articles/gateways/ArticleGateway";

const URL = "https://jsonplaceholder.typicode.com/posts";

export class ProdArticleGateway implements ArticleGateway {
  async retrieveAll(): Promise<
    { error: Error; data: null } | { data: Article[]; error: null }
  > {
    const res = await fetch(URL);
    if (res.ok)
      return {
        error: null,
        data: (await res.json()) as Article[],
      };
    return {
      error: new Error("Something Bad Happened"),
      data: null,
    };
  }
}
