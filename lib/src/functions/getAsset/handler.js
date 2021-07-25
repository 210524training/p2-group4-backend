import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const asset = async (event) => {
    const d = await getAll('asset');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(asset);
//# sourceMappingURL=handler.js.map