import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'asset/{id}',
        cors: true,
        // request: {
        //   schema: {
        //     'application/json': schema
        //   }
        // }
      }
    }
  ]
}
