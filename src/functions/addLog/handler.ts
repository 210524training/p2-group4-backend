import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import addLog from '../../../db/DAO/log';

const aLog: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const d = await addLog(event.body.log);
  return formatJSONResponse({data:d, event});
}

export const main = middyfy(aLog);
