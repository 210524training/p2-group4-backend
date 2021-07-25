import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const comment = async (event) => {
    const d = await getAll('comment');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(comment);
//# sourceMappingURL=handler.js.map