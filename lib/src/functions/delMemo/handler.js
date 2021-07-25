import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { deletStuff } from '../../../db/DAO';
const dMemo = async (event) => {
    const d = await deletStuff(event.body.id, 'memo');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(dMemo);
//# sourceMappingURL=handler.js.map