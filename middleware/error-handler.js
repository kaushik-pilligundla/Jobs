import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    const defualtError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later'
    }
    if (err.name === 'ValidationError') {
        defualtError.statusCode = StatusCodes.BAD_REQUEST
        // defualtError.msg = err.message
        defualtError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(',')
    }
    if (err.code && err.code === 11000) {
        defualtError.statusCode = StatusCodes.BAD_REQUEST
        defualtError.msg = `${ Object.keys(err.keyValue) } field has to be unique`
    }
    res.status(defualtError.statusCode).json({ msg: defualtError.msg });
}

export default errorHandlerMiddleware