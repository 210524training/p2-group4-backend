import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';

// eslint-disable-next-line max-len
const memo: ValidatedEventAPIGatewayProxyEvent<never> = async (event) => {
  const d = await getAll('memo');
  return formatJSONResponse({data:d, event});
}

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(memo);
