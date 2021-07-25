import { handlerPath } from '@libs/handlerResolver';
export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'user',
                cors: true,
            }
        }
    ]
};
//# sourceMappingURL=index.js.map