import type { User } from "../models/user.models";
export declare class UserService {
    private users;
    constructor();
    registerUser(user: User): void;
    getUserById(id: number): User | undefined;
    removeBookFromUser(userId: number, bookId: number): void;
}
//# sourceMappingURL=user.service.d.ts.map