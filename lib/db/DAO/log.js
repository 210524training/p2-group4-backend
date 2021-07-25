import dynamo from '../connection/connectionService';
const docClient = dynamo;
const tableName = 'p2-stuff';
export default async function addLog(log) {
    const params = {
        TableName: tableName,
        Item: {
            'category': 'log',
            'id': log.id,
            'asset_tag': log.asset_tag,
            'date': log.date,
            'tech': log.tech,
            'problemType': log.problemType,
            'description': log.description,
        },
    };
    const data = await docClient.put(params).promise();
    console.log('Added item:', JSON.stringify(data, null, 2));
    if (data) {
        return 'success';
    }
    return 'failed';
}
//# sourceMappingURL=log.js.map