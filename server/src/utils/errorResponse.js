// In case error occurs, handle it decently
/* ErrorResponse is a class that has all the properties &
Methods of the built in Error Object of Node*/
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        statusCode = this.statusCode;
    }
}

export default ErrorResponse;
