const AWS = require('aws-sdk')
const TABLE_NAME = process.env.TABLE_NAME;
const dynamodb = new AWS.DynamoDB.DocumentClient({
    endpoint: "http://localhost:8000",
    region: "ap-northeast-1",
    credentials: new AWS.Credentials("dummy", "dummy"),
});

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.handler = async function handler(event, context) {
    await dynamodb.put({
        TableName: TABLE_NAME,
        Item: {
            hash_key: "foo",
            range_key: "bar",
        }
    }).promise();
    const {Item} = await dynamodb.get({
        TableName: TABLE_NAME,
        Key: {
            hash_key: "foo",
            range_key: "bar",
        }
    }).promise();
    console.log(Item);
    return {};
};
