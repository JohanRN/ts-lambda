class CustomError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends CustomError {
    constructor(message: string) {
        super(400, message);
    }
}

class UnauthorizedError extends CustomError {
    constructor(message: string) {
        super(401, message);
    }
}

class NotFoundError extends CustomError {
    constructor(message: string) {
        super(404, message);
    }
}

export { CustomError, BadRequestError, NotFoundError, UnauthorizedError };