import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { updateStuff } from '../../../db/DAO';
const pMemo = async (event) => {
    const d = await updateStuff(event.body.id, 'memo', event.body.what, event.body.change);
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(pMemo);
//# sourceMappingURL=handler.js.map