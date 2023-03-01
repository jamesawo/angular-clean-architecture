import { Handler } from '@netlify/functions';

import { remove, post, put, get } from '../posts/helper';

const handler: Handler = async (event, context) => {

    let body;
    try {
        switch (event.httpMethod) {
            case 'GET':
                body = await get(event);
                break;

            case 'POST':
                body = await post(event);
                break;

            case 'PUT':
                body = await put(event);
                break;

            case 'DELETE':
                body = await remove(event.queryStringParameters.postId);
                break;

            default:
                return {
                    statusCode: 405,
                    body: JSON.stringify({ message: 'Method not supported' })
                }
        }

        return {
            statusCode: 200,
            body: JSON.stringify(body)
        };

    } catch (err: any) {

        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.toString() })
        }
    }

}

export { handler };
