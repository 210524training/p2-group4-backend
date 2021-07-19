import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import addAsset from '../../../db/DAO/asset';

const aAsset: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const d = await addAsset(event.body.asset);
  return formatJSONResponse({data:d, event});
}

export const main = middyfy(aAsset);
