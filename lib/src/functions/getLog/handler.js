import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const log = async (event) => {
    const d = await getAll('log');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(log);
//# sourceMappingURL=handler.js.map