import type { Book, SearchQuery } from "../entities/Book";

export interface BookGateway {
  search(searchQuery: SearchQuery): Promise<Book[]>;
}
