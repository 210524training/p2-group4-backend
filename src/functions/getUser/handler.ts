import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
import schema from './schema';

const getUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const d = await getAll('user');
    let user;
    for(let i=0; i<d.length; i++) {
        if(d[i].id == event.body.id) {
            user = d[i];
        }
    }
    return formatJSONResponse({data: user, event});
}

export const main = middyfy(getUser);
