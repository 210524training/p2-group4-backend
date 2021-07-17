import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { deletStuff } from '../../../db/DAO';

const dAsset: ValidatedEventAPIGatewayProxyEvent<never> = async (event) => {
  const dd = event.path.split('/');
  const d = await deletStuff(dd[1], 'asset');
  return formatJSONResponse({data:d, event});
}

export const main = middyfy(dAsset);
