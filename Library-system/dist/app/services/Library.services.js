//clase con metodos a usar para tomar, poner y eliminar libros
export class LibraryService {
    constructor(userService) {
        this.userService = userService;
        //lista privada de libros
        this.books = [];
    } //inyectamos servicio usuario
    //ya existe el id
    exists(id) {
        return this.books.some(book => book.id === id);
    }
    //METODO para agregar libros
    addBook(book) {
        if (this.exists(book.id)) {
            console.log(`El libro ya existe: ${book.title} por ${book.author}`);
            return;
        }
        this.books.push(book);
        console.log(`Libro agregado: ${book.title} por ${book.author}`);
    }
    //loanbook
    loanBook(bookId, userId) {
        const book = this.books.find(book => book.id === bookId);
        const user = this.userService.getUserById(userId);
        if (book && user && book.isAvailable) {
            book.isAvailable = false;
            user.borrowedBooks.push(bookId);
            console.log(`Libro prestado: ${book.title} por ${user.name}`);
        }
    }
    //obtener todos los libros
    getAllBooks() {
        return this.books;
    }
    //buscar por id para prestarlo
    borrowBook(id) {
        const book = this.books.find(book => book.id === id);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            console.log(`Libro prestado: ${book.title} por ${book.author}`);
            return true;
        }
        return false;
    }
    //REGRESAR LIBRO    
    backBook(bookId, userId) {
        const book = this.books.find(book => book.id === bookId);
        const user = this.userService.getUserById(userId);
        //no existe usuario y libro
        if (!user || !book) {
            console.error("Usuario o libro no encontrado");
            return false;
        }
        //cambiamos el estado del libro
        book.isAvailable = true;
        //pedimos al otro servicio limpie al usuario
        this.userService.removeBookFromUser(userId, bookId);
        console.log(`Libro regresado: ${book.title} por ${book.author}fue devuelto por:${user.name}}`);
        return true;
    }
    //libro no existe en la biblioteca
    bookNotFound(id) {
        const book = this.books.find(book => book.id === id);
        if (!book || undefined) {
            console.log(`Libro no encontrado: ${id}`);
            return false;
        }
        return false;
    }
    //cuantos libros estan prestados ycuantos libros estan disponibles
    getStates() {
        return this.books.reduce((acc, book) => {
            if (book.isAvailable) {
                acc.disponible++;
            }
            else {
                acc.prestado++;
            }
            return acc;
        }, { disponible: 0, prestado: 0 });
    }
}
//# sourceMappingURL=Library.services.js.map