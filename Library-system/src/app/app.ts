import type {Book }from "./models/book.models.js"
import { LibraryService } from "./services/Library.services.js"
import { UserService } from "./services/user.service.js";



//usamos el servicio inyectandolo
const userService = new UserService();
const library = new LibraryService(userService);

    //creamos un libro
    const book1: Book={
        id:101,
        title: "El Quijote",
        author: "Miguel de Cervantes",
        isAvailable: true
    }

    const book2: Book={
        id: 102,
        title: "Moby Dick",
        author: "Herman Melville",
        isAvailable: true
    }
    

    //agregar  libros
    library.addBook(book1);
    library.addBook(book2);

/*
    //mostramos nuestro stock de libros
    console.log("Gran Biblioteca Central Wuanma");
    console.table(library.getAllBooks());

    console.log(library.borrowBook(101))
    console.log();
    console.table(library.getAllBooks());
    
    console.log(library.bookNotFound(103));
    
   console.log("--- Estadísticas de la Biblioteca ---");
    console.log(library.getStates());
    */

    // ... (tus imports y la creación de servicios que ya tienes)

const bookListElement = document.getElementById('book-list');
const statsElement = document.getElementById('stats');

function render() {
    if (!bookListElement || !statsElement) return;

    // 1. Mostrar Estadísticas usando tu método .getStats()
    const stats = library.getStates();
    statsElement.innerHTML = `
        <p>Disponibles: ${stats.disponible} | Prestados: ${stats.prestado}</p>
    `;

    // 2. Mostrar Libros usando .getAllBooks() y .map()
    const books = library.getAllBooks();

    bookListElement.innerHTML = books.map(book => `
        <li>
            <strong>${book.title}</strong> - ${book.author} 
            [${book.isAvailable ? '✅ Libre' : '❌ Prestado'}]
        </li>
    `).join('');
}

// Ejecutar el render inicial
render();





