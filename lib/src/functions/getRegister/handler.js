import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAll } from '../../../db/DAO';
const register = async (event) => {
    const d = await getAll('register');
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(register);
//# sourceMappingURL=handler.js.map