import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';

const asset: ValidatedEventAPIGatewayProxyEvent<never> = async (event) => {
    const d = getAll('asset');
    return formatJSONResponse({data: d, event});
}

export const main = middyfy(asset);