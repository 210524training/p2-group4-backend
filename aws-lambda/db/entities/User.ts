/* eslint-disable */
export interface IUser {
    id: number;
    name: string;
    email: string;
}
export class MUser {
    constructor(
      public ID: string,
      public Password: string,
      public Role:role,
    ) {}
}
class User implements IUser {

    public id: number;
    public name: string;
    public email: string;
    constructor(nameOrUser: string | IUser, password: string, email?: string, id?: number, role?: string
        ) {
        if (typeof nameOrUser === 'string') {
            this.name = nameOrUser;
            this.email = email || '';
            this.id = id || -1;
        } else {
            this.name = nameOrUser.name;
            this.email = nameOrUser.email;
            this.id = nameOrUser.id;
        }
    }
}

// david's edit #2

export type role = 'Admin' | 'Technician'
export default User;
