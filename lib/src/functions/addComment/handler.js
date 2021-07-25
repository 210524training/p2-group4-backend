import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import addComment from '../../../db/DAO/comment';
import Commentx from 'db/entities/comments';
const aComment = async (event) => {
    const m = new Commentx('comment', event.body.id, event.body.memo_id, event.body.date, event.body.user, event.body.message);
    const d = await addComment(m);
    return formatJSONResponse({ data: d, event });
};
export const main = middyfy(aComment);
//# sourceMappingURL=handler.js.map