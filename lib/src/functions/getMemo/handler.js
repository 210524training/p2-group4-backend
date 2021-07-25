import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const memo = async (event) => {
    const d = await getAll('memo');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(memo);
//# sourceMappingURL=handler.js.map