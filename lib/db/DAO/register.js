import dynamo from '../connection/connectionService';
const docClient = dynamo;
const tableName = 'p2-stuff';
export default async function addRegister(register) {
    const params = {
        TableName: tableName,
        Item: {
            'category': 'register',
            'id': register.id,
            'password': register.password,
            'name': register.name,
            'role': register.role,
            'status': register.status,
        },
    };
    const data = await docClient.put(params).promise();
    console.log('Added item:', JSON.stringify(data, null, 2));
    if (data) {
        return 'success';
    }
    return 'failed';
}
//# sourceMappingURL=register.js.map