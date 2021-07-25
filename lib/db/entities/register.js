export default class Register {
    constructor(category = 'register', id, password, name, role = 'Technician' || 'User', status = 'pending' || 'rejected' || 'approved') {
        this.category = category;
        this.id = id;
        this.password = password;
        this.name = name;
        this.role = role;
        this.status = status;
    }
}
//# sourceMappingURL=register.js.map