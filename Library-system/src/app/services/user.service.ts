import type { User } from "../models/user.models";


export class UserService{
    private users: User[] = [];

    constructor() {}

   //registrar usuario
   registerUser(user:User):void{
    this.users.push(user);
    console.log(`Usuario registrado: ${user.name}`);

   }

   //buscamos usuario por su id
   getUserById(id:number): User|undefined{
    return this.users.find(user =>user.id ===id)
   }

   //usuario regresa libro
   removeBookFromUser(userId: number, bookId: number): void{
    const user = this.getUserById(userId);

   

    if(user){}
     //filtramos los array para que se queden los id menos el que vamos a devolver
     user?.borrowedBooks.filter((id:number)=> id !== bookId);


   }

}