import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { deletStuff } from '../../../db/DAO';
const dLog = async (event) => {
    const d = await deletStuff(event.body.id, 'log');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(dLog);
//# sourceMappingURL=handler.js.map