import dynamo from '../connection/connectionService';
const docClient = dynamo;
const tableName = 'p2-stuff';
export async function getAll(cat) {
    const params = {
        TableName: tableName,
        KeyConditionExpression: '#C=:ad',
        ExpressionAttributeNames: {
            '#C': 'category',
        },
        ExpressionAttributeValues: {
            ':ad': cat,
        },
    };
    const data = await docClient.query(params).promise();
    return data.Items;
}
export async function updateStuff(id, cat, what, change) {
    const params = {
        TableName: tableName,
        Key: {
            'category': cat,
            'id': id,
        },
        UpdateExpression: 'set #W=:c',
        ExpressionAttributeNames: {
            '#W': what,
        },
        ExpressionAttributeValues: {
            ':c': change,
        },
        ReturnValues: 'ALL_NEW',
    };
    const returned = await docClient.update(params).promise();
    console.log(returned);
    return returned;
}
export async function deletStuff(id, cat) {
    const params = {
        TableName: tableName,
        Key: {
            'category': cat,
            'id': id,
        },
    };
    const returned = await docClient.delete(params).promise();
    console.log(returned);
    return true;
}
export async function putUser(user) {
    const params = {
        TableName: tableName,
        Key: {
            'category': 'user',
            'id': user.id,
        },
        Item: {
            ...user,
        },
    };
    const returned = await docClient.put(params).promise();
    console.log(returned);
    return true;
}
export function test1(i) {
    return i;
}
//# sourceMappingURL=index.js.map