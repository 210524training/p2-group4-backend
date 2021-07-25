export default class Tickets {
    constructor(category = 'ticket', id, date, asset_tag, issue, room, technician, status = 'waiting' || 'fixing' || 'resolved') {
        this.category = category;
        this.id = id;
        this.date = date;
        this.asset_tag = asset_tag;
        this.issue = issue;
        this.room = room;
        this.technician = technician;
        this.status = status;
    }
}
//# sourceMappingURL=tickets.js.map