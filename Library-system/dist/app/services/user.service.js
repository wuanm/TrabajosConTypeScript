export class UserService {
    constructor() {
        this.users = [];
    }
    //registrar usuario
    registerUser(user) {
        this.users.push(user);
        console.log(`Usuario registrado: ${user.name}`);
    }
    //buscamos usuario por su id
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    //usuario regresa libro
    removeBookFromUser(userId, bookId) {
        const user = this.getUserById(userId);
        if (user) { }
        //filtramos los array para que se queden los id menos el que vamos a devolver
        user === null || user === void 0 ? void 0 : user.borrowedBooks.filter((id) => id !== bookId);
    }
}
//# sourceMappingURL=user.service.js.map