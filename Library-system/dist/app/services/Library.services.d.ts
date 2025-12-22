import type { Book } from "../models/book.models.js";
import { UserService } from "../services/user.service.js";
export declare class LibraryService {
    private userService;
    private books;
    constructor(userService: UserService);
    private exists;
    addBook(book: Book): void;
    loanBook(bookId: number, userId: number): void;
    getAllBooks(): Book[];
    borrowBook(id: number): boolean;
    backBook(bookId: number, userId: number): boolean;
    bookNotFound(id: number): boolean;
    getStates(): {
        disponible: number;
        prestado: number;
    };
}
//# sourceMappingURL=Library.services.d.ts.map