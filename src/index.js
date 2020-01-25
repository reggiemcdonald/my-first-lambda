/*
 * To work with lambdas, we need to define a handler
 * Handlers are specified in the AWS console
 * Here I define a few functions to do that
 */


// Given name, return a greeting
const greeting = (name = "Anonymous") => `Hello, ${name}`;

/*
 * Construct the response
 */
const buildResponse = (name) => {
    const greet = greeting(name);
    return {
        statusCode: 200,
        body: greet
    };
};

/*
 * Given an event object with key name, return Hello, <name>
 * @param event = {
 *     name: <name>
 * }
 */
exports.handler = async (event) => {
    // Event should have a key name
    const name = event && event.name;
    return buildResponse(name);
};