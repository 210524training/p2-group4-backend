import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';

// eslint-disable-next-line max-len
const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => formatJSONResponse({
  message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  event,
});

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(hello);
