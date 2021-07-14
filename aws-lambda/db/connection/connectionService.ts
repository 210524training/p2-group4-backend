var AWS = require('aws-sdk/dist/aws-sdk-react-native');

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2',
  endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
  apiVersion: 'latest',
});

export default docClient;
