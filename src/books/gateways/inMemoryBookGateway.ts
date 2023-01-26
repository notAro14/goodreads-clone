import { Book } from "../entities/Book";
import { BookGateway } from "./BookGateway";

export class InMemoryBookGateway implements BookGateway {
  private _books: Book[] | null = null;

  public set init(fake: Book[]) {
    this._books = fake;
  }

  async search(searchQuery: string) {
    console.log("Keyword : " + searchQuery);
    return this._books as Book[];
  }
}
