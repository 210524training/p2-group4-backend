import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import addRegister from '../../../db/DAO/register';

const aRegister: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const d = await addRegister(event.body.register);
  return formatJSONResponse({data:d, event});
}

export const main = middyfy(aRegister);
