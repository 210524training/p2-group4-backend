export const formatJSONResponse = (response) => ({
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'content-type, X-Amx-Date, Authorization, X-Api-Key, X-Amx-Security-Token, X-Amz-User-Agent',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIOMS',
    },
    body: JSON.stringify(response),
});
//# sourceMappingURL=apiGateway.js.map