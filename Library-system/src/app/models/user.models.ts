export interface User{
    id:number;
    name:string;
    memberShipType:  'basic' | 'premium';
    borrowedBooks: number[];  //array de ids de lños libros que tiene.

}