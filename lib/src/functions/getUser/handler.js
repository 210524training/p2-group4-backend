import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const getUser = async (event) => {
    const d = await getAll('user');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(getUser);
//# sourceMappingURL=handler.js.map