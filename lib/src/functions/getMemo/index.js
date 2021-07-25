import { handlerPath } from '@libs/handlerResolver';
export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'memo',
                cors: true,
            }
        }
    ]
};
//# sourceMappingURL=index.js.map