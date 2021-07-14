import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { updateStuff } from '../../../db/DAO';


// eslint-disable-next-line max-len

const pRegister: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) =>
  formatJSONResponse({
    data: await updateStuff(event.body.id, 'register', event.body.what, event.body.change),
    event,
  });

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(pRegister);
