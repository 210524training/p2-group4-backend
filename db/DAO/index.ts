import dynamo from '../connection/connectionService';

const docClient = dynamo;
const tableName = 'p2-stuff';

export async function getAll(cat:string):Promise<any> {
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
  
  export async function updateStuff(id:string, cat:string, what:string, change:string) {
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
  
  export async function deletStuff(id:string, cat:string) {
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

  export function test1(i:string) {
    return i;
  }