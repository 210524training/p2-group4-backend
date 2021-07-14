import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from './connection/connectionService';

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
    const returned = await this.docClient.update(params).promise();
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
    const returned = await this.docClient.delete(params).promise();
    console.log(returned);
    return returned;
  }