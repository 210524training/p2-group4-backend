import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { getAll } from '../../../db/DAO';

// eslint-disable-next-line max-len
const res = getAll('asset');
const asset: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => formatJSONResponse({
  data: res,
  event,
});

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(asset);
