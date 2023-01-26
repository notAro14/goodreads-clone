import { Book } from "../entities/Book";
import { BookGateway } from "./BookGateway";

export class ITBookStoreGateway implements BookGateway {
  async search(searchQuery: string): Promise<Book[]> {
    const url = `https://api.itbook.store/1.0/search/${searchQuery}`;
    const res = await fetch(url);
    const data = await res.json();
    const { books } = data as { books: Book[] };
    return books;
  }
}
