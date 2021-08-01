// In case error occurs, handle it decently
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        statusCode = this.statusCode;
    }
}

export default ErrorResponse;
