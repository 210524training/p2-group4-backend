export default class User {
    constructor(
      public username: string,
      public password: string,
      public role = 'Technician' || 'Admin',
    ) {}
  }