// Middleware apra manejar errores
const errorHandler = (err,req,res,next) => {
    const statusCode = err.status || 500;

    const errorResponse = {
        error: {
            message: err.message || 'Internal Server Error',
            code: err.code || "internal_error",
        },
    };

    // Enviar respuesta en formato JSON
    res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;