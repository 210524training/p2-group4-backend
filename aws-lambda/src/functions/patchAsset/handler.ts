import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { updateStuff } from '../../../db/DAO';


// eslint-disable-next-line max-len

const pAsset: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) =>
  formatJSONResponse({
    data: await updateStuff(event.body.id, 'asset', event.body.what, event.body.change),
    event,
  });

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(pAsset);
