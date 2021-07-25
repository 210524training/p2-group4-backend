import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { updateStuff } from '../../../db/DAO';
const pTicket = async (event) => {
    const d = await updateStuff(event.body.id, 'ticket', event.body.what, event.body.change);
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(pTicket);
//# sourceMappingURL=handler.js.map