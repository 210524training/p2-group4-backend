import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import addRegister from '../../../db/DAO/register';
import Register from 'db/entities/register';
const aRegister = async (event) => {
    const r = new Register('register', event.body.id, event.body.password, event.body.name, event.body.role, event.body.status);
    const d = await addRegister(r);
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(aRegister);
//# sourceMappingURL=handler.js.map