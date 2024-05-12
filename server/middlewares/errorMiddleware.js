class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error!";
  err.statusCode = err.statusCode || 500;

  //when same values comes(eg:email must be unique)
  if (err.code == 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered!`;
    err = new ErrorHandler(message, 400);
  }
  //invalid json web token
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid Json web token. Try Again!";
    err = new ErrorHandler(message, 400);
  }
  //Json web token expired
  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired. Try Again!";
    err = new ErrorHandler(message, 400);
  }
  //invalid data(type mismatch,validation error...)
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}!`;
    err = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;
  console.log(errorMessage);
  return res.status(400).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
