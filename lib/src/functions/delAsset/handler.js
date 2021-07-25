import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { deletStuff } from '../../../db/DAO';
const dAsset = async (event) => {
    const d = await deletStuff(event.body.id, 'asset');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(dAsset);
//# sourceMappingURL=handler.js.map