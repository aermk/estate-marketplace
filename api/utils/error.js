export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  console.log(message, "msg");
  return error;
};

export default errorHandler;
