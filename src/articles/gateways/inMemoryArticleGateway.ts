import type { ArticleGateway } from "src/articles/gateways/ArticleGateway";
import type { Article } from "src/articles/entities/Article";

export class InMemoryArticleGateway implements ArticleGateway {
  private _articles: Article[] | null = null;
  private _error: Error | null = null;

  public set init(fakeArticles: Article[]) {
    this._articles = fakeArticles;
  }
  public set error(err: Error | null) {
    this._error = err;
  }

  async retrieveAll(): Promise<
    { error: Error; data: null } | { data: Article[]; error: null }
  > {
    if (this._error)
      return {
        error: this._error,
        data: null,
      };
    return {
      data: this._articles as Article[],
      error: null,
    };
  }
}
