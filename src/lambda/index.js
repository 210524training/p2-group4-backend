/* eslint-disable */
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from './connection/connectionService';

const docClient = dynamo;
const tableName = 'p2-stuff';

const assetPath = '/asset';
const memoPath = '/memo';
const registerPath = '/register';
const ticketPath = '/ticket';
const logPath = '/log';

exports.handler = async function(event) {
  console.log('Request event: ', event);
  let res;
  switch(true) {
    case (event.httpMethod == 'Get' && event.path === assetPath):
      res = getAll('asset');
      break;
    case (event.httpMethod == 'Get' && event.path === memoPath):
      res = getAll('memo');
      break;
    case (event.httpMethod == 'Get' && event.path === registerPath):
      res = getAll('register');
      break;
    case (event.httpMethod == 'Get' && event.path === ticketPath):
      res = getAll('ticket');
      break;
    case (event.httpMethod == 'Get' && event.path === logPath):
      res = getAll('log');
      break;
    case (event.httpMethod == 'POST' && event.path === assetPath):
      res = buildResponse(200);
      break;
    case (event.httpMethod == 'POST' && event.path === memoPath):
      res = buildResponse(200);
      break;
    case (event.httpMethod == 'POST' && event.path === registerPath):
      res = buildResponse(200);
      break;
    case (event.httpMethod == 'POST' && event.path === ticketPath):
      res = buildResponse(200);
      break;
    case (event.httpMethod == 'POST' && event.path === logPath):
      res = buildResponse(200);
      break;
    default:
      res = buildResponse(404, '404 not found')
  }
  return res;
}

async function getAll(cat) {
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

async function updateStuff(id, cat, what, change) {
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