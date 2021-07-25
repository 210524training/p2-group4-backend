import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { putUser } from '../../../db/DAO';
import User from 'db/entities/User';
const register = async (event) => {
    const user = new User(event.body.id, event.body.role);
    const d = await putUser(user);
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(register);
//# sourceMappingURL=handler.js.map