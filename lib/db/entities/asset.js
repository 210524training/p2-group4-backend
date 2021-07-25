export default class Asset {
    constructor(category = 'asset', id, assetName, asset_tag, deviceGroup, model, assignee, date_issued, date_decomission, department, typeOS, roomNumber, make) {
        this.category = category;
        this.id = id;
        this.assetName = assetName;
        this.asset_tag = asset_tag;
        this.deviceGroup = deviceGroup;
        this.model = model;
        this.assignee = assignee;
        this.date_issued = date_issued;
        this.date_decomission = date_decomission;
        this.department = department;
        this.typeOS = typeOS;
        this.roomNumber = roomNumber;
        this.make = make;
    }
}
//# sourceMappingURL=asset.js.map